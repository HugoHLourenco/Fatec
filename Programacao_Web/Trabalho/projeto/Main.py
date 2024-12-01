from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')


# Disciplinas ---------------------------------------------------------------------------------------------------------------
@app.route('/disciplinas')
def listar_disciplinas():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas")
    disciplinas = cursor.fetchall()
    db.close()
    return render_template('listar_disciplinas.html', disciplinas=disciplinas)

@app.route('/disciplinas/cadastro', methods=['GET', 'POST'])
def cadastrar_disciplina():
    if request.method == 'POST':
        nome = request.form['nome']
        carga_horaria = request.form['carga_horaria']
        db = get_db_connection()
        cursor = db.cursor()
        cursor.execute("INSERT INTO HugoIII_tbdisciplinas (nome, carga_horaria) VALUES (%s, %s)", (nome, carga_horaria))
        db.commit()
        db.close()
        return redirect(url_for('listar_disciplinas'))
    return render_template('cadastrar_disciplina.html')

@app.route('/disciplinas/editar/<int:id>', methods=['GET', 'POST'])
def editar_disciplina(id):
    db = get_db_connection()
    cursor = db.cursor()
    if request.method == 'POST':
        nome = request.form['nome']
        carga_horaria = request.form['carga_horaria']
        cursor.execute("UPDATE HugoIII_tbdisciplinas SET nome=%s, carga_horaria=%s WHERE id=%s", (nome, carga_horaria, id))
        db.commit()
        db.close()
        return redirect(url_for('listar_disciplinas'))
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas WHERE id=%s", (id,))
    disciplina = cursor.fetchone()
    db.close()
    return render_template('editar_disciplina.html', disciplina=disciplina)

@app.route('/disciplinas/excluir/<int:id>', methods=['POST'])
def excluir_disciplina(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("DELETE FROM HugoIII_tbdisciplinas WHERE id=%s", (id,))
    db.commit()
    db.close()
    return redirect(url_for('listar_disciplinas'))








# Cursos ---------------------------------------------------------------------------------------------------------------
@app.route('/cursos')
def listar_cursos():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tb_cursos")
    cursos = cursor.fetchall()
    db.close()
    return render_template('listar_cursos.html', cursos=cursos)

@app.route('/cursos/cadastro', methods=['GET', 'POST'])
def cadastrar_curso():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas")
    disciplinas = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        disciplinas_selecionadas = request.form.getlist('disciplinas')
        cursor.execute(
            "SELECT SUM(carga_horaria) FROM HugoIII_tbdisciplinas WHERE id IN (%s)" %
            ','.join(['%s'] * len(disciplinas_selecionadas)),
            tuple(disciplinas_selecionadas)
        )
        carga_horaria_total = cursor.fetchone()[0] or 0
        cursor.execute("INSERT INTO HugoIII_tb_cursos (nome, carga_horaria_total) VALUES (%s, %s)", (nome, carga_horaria_total))
        curso_id = cursor.lastrowid
        for disciplina_id in disciplinas_selecionadas:
            cursor.execute("INSERT INTO HugoIII_tb_curso_disciplinas (curso_id, disciplina_id) VALUES (%s, %s)", (curso_id, disciplina_id))
        db.commit()
        db.close()
        return redirect(url_for('listar_cursos'))
    db.close()
    return render_template('cadastrar_curso.html', disciplinas=disciplinas)

@app.route('/cursos/editar/<int:id>', methods=['GET', 'POST'])
def editar_curso(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas")
    todas_disciplinas = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        disciplinas_selecionadas = request.form.getlist('disciplinas')

        cursor.execute(
            "SELECT SUM(carga_horaria) FROM HugoIII_tbdisciplinas WHERE id IN (%s)" %
            ','.join(['%s'] * len(disciplinas_selecionadas)),
            tuple(disciplinas_selecionadas)
        )
        carga_horaria_total = cursor.fetchone()[0] or 0

        cursor.execute("UPDATE HugoIII_tb_cursos SET nome=%s, carga_horaria_total=%s WHERE id=%s", (nome, carga_horaria_total, id))
        
        cursor.execute("DELETE FROM HugoIII_tb_curso_disciplinas WHERE curso_id=%s", (id,))
        for disciplina_id in disciplinas_selecionadas:
            cursor.execute("INSERT INTO HugoIII_tb_curso_disciplinas (curso_id, disciplina_id) VALUES (%s, %s)", (id, disciplina_id))
        db.commit()
        db.close()
        return redirect(url_for('listar_cursos'))
    
    cursor.execute("SELECT * FROM HugoIII_tb_cursos WHERE id=%s", (id,))
    curso = cursor.fetchone()
    cursor.execute("SELECT disciplina_id FROM HugoIII_tb_curso_disciplinas WHERE curso_id=%s", (id,))
    disciplinas_curso = [row[0] for row in cursor.fetchall()]
    db.close()
    return render_template('editar_curso.html', curso=curso, todas_disciplinas=todas_disciplinas, disciplinas_curso=disciplinas_curso)

@app.route('/cursos/excluir/<int:id>', methods=['POST'])
def excluir_curso(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("DELETE FROM HugoIII_tb_cursos WHERE id=%s", (id,))
    db.commit()
    db.close()
    return redirect(url_for('listar_cursos'))


    




# Professores ------------------------------------------------------------------------------------------------------------
@app.route('/professores')
def listar_professores():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("""
        SELECT p.id, p.nome, p.telefone, p.usuario, p.senha, GROUP_CONCAT(DISTINCT d.nome ORDER BY d.nome ASC SEPARATOR ', ') as disciplinas
        FROM HugoIII_tb_professores p
        LEFT JOIN HugoIII_tb_professor_disciplinas pd ON p.id = pd.professor_id
        LEFT JOIN HugoIII_tbdisciplinas d ON pd.disciplina_id = d.id
        GROUP BY p.id, p.nome, p.telefone, p.usuario, p.senha
    """)
    professores = cursor.fetchall()
    db.close()
    return render_template('listar_professores.html', professores=professores)

@app.route('/professores/cadastro', methods=['GET', 'POST'])
def cadastrar_professor():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas")
    disciplinas = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        telefone = request.form['telefone']
        usuario = request.form['usuario']
        senha = request.form['senha']
        disciplinas_selecionadas = request.form.getlist('disciplinas')
        cursor.execute("INSERT INTO HugoIII_tb_professores (nome, telefone, usuario, senha) VALUES (%s, %s, %s, %s)", (nome, telefone, usuario, senha))
        professor_id = cursor.lastrowid
        for disciplina_id in disciplinas_selecionadas:
            cursor.execute("INSERT INTO HugoIII_tb_professor_disciplinas (professor_id, disciplina_id) VALUES (%s, %s)", (professor_id, disciplina_id))
        db.commit()
        db.close()
        return redirect(url_for('listar_professores'))
    db.close()
    return render_template('cadastrar_professor.html', disciplinas=disciplinas)

@app.route('/professores/editar/<int:id>', methods=['GET', 'POST'])
def editar_professor(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tbdisciplinas")
    todas_disciplinas = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        telefone = request.form['telefone']
        usuario = request.form['usuario']
        senha = request.form['senha']
        disciplinas_selecionadas = request.form.getlist('disciplinas')
        cursor.execute("UPDATE HugoIII_tb_professores SET nome=%s, telefone=%s, usuario=%s, senha=%s WHERE id=%s", (nome, telefone, usuario, senha, id))
        cursor.execute("DELETE FROM HugoIII_tb_professor_disciplinas WHERE professor_id=%s", (id,))
        for disciplina_id in disciplinas_selecionadas:
            cursor.execute("INSERT INTO HugoIII_tb_professor_disciplinas (professor_id, disciplina_id) VALUES (%s, %s)", (id, disciplina_id))
        db.commit()
        db.close()
        return redirect(url_for('listar_professores'))
    cursor.execute("SELECT * FROM HugoIII_tb_professores WHERE id=%s", (id,))
    professor = cursor.fetchone()
    cursor.execute("SELECT disciplina_id FROM HugoIII_tb_professor_disciplinas WHERE professor_id=%s", (id,))
    disciplinas_professor = [row[0] for row in cursor.fetchall()]
    db.close()
    return render_template('editar_professor.html', professor=professor, todas_disciplinas=todas_disciplinas, disciplinas_professor=disciplinas_professor)

@app.route('/professores/excluir/<int:id>', methods=['POST'])
def excluir_professor(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("DELETE FROM HugoIII_tb_professores WHERE id=%s", (id,))
    db.commit()
    db.close()
    return redirect(url_for('listar_professores'))














# Alunos -----------------------------------------------------------------------------------------------------------------
@app.route('/alunos')
def listar_alunos():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tb_alunos")
    alunos = cursor.fetchall()
    db.close()
    return render_template('listar_alunos.html', alunos=alunos)


@app.route('/alunos/cadastro', methods=['GET', 'POST'])
def cadastrar_aluno():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tb_cursos")
    cursos = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        cpf = request.form['cpf']
        endereco = request.form['endereco']
        senha = request.form['senha']
        curso_nome = request.form['curso_nome']
        cursor.execute("INSERT INTO HugoIII_tb_alunos (nome, cpf, endereco, senha, curso_nome) VALUES (%s, %s, %s, %s, %s)", (nome, cpf, endereco, senha, curso_nome))
        db.commit()
        db.close()
        return redirect(url_for('listar_alunos'))
    db.close()
    return render_template('cadastrar_aluno.html', cursos=cursos)


@app.route('/alunos/editar/<int:id>', methods=['GET', 'POST'])
def editar_aluno(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM HugoIII_tb_cursos")
    cursos = cursor.fetchall()
    if request.method == 'POST':
        nome = request.form['nome']
        cpf = request.form['cpf']
        endereco = request.form['endereco']
        senha = request.form['senha']
        curso_nome = request.form['curso_nome']
        cursor.execute("UPDATE HugoIII_tb_alunos SET nome=%s, cpf=%s, endereco=%s, senha=%s, curso_nome=%s WHERE id=%s", (nome, cpf, endereco, senha, curso_nome, id))
        db.commit()
        db.close()
        return redirect(url_for('listar_alunos'))
    cursor.execute("SELECT * FROM HugoIII_tb_alunos WHERE id=%s", (id,))
    aluno = cursor.fetchone()
    db.close()
    return render_template('editar_aluno.html', aluno=aluno, cursos=cursos)


@app.route('/alunos/excluir/<int:id>', methods=['POST'])
def excluir_aluno(id):
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("DELETE FROM HugoIII_tb_alunos WHERE id=%s", (id,))
    db.commit()
    db.close()
    return redirect(url_for('listar_alunos'))




# Método para entrar no DB -------------------------------------------------------------------------------------------------
def get_db_connection():
    return mysql.connector.connect(host='201.23.3.86', user='usr_aluno', password='E$tud@_m@1$', port=5000, database='aula_fatec')

app.run()
