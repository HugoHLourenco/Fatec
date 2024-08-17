package Exercicio_aula_09;

public class Livro implements Publicacao {

    // Atributos
    private String titulo, autor;
    private int totPaginas, pgAtual;
    private boolean aberto;
    private Pessoa leitor;

    // Métodos
    public String detalhes() {
        return "\nO livro de titulo: " + titulo +
                "\nAutor(a): " + autor  +
                "\nCom " + totPaginas + " páginas" +
                "\nEstá na página: " + pgAtual +
                "\nEle está aberto? " + aberto +
                "\nO(a) leitor(a) é: " + leitor.getNome() + ", " + leitor.getIdade() +" anos," + " sexo: " + leitor.getSexo() +
                "\n----------------------------------------------------";
    }

    // Construtores
    public Livro(String titulo, String autor, int totPaginas, Pessoa leitor) {
        this.titulo = titulo;
        this.autor = autor;
        this.totPaginas = totPaginas;
        this.leitor = leitor;
        this.aberto = false;
        this.pgAtual = 0;
    }

    // Getters e Setters
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getTotPaginas() {
        return totPaginas;
    }

    public void setTotPaginas(int totPaginas) {
        this.totPaginas = totPaginas;
    }

    public int getPgAtual() {
        return pgAtual;
    }

    public void setPgAtual(int pgAtual) {
        this.pgAtual = pgAtual;
    }

    public boolean isAberto() {
        return aberto;
    }

    public void setAberto(boolean aberto) {
        this.aberto = aberto;
    }

    public Pessoa getLeitor() {
        return leitor;
    }

    public void setLeitor(Pessoa leitor) {
        this.leitor = leitor;
    }

    // Métodos implement
    @Override
    public void abrir() {
        this.aberto = true;
    }

    @Override
    public void fechar() {
        this.aberto = false;
    }

    @Override
    public void folhear(int pg) {
        if (pg >= 0 && pg < this.totPaginas) {
            this.pgAtual = pg;
        } else {
            System.out.println("Não existe essa página neste livro!!!");
        }
    }

    @Override
    public void avancarPg() {
        this.pgAtual ++;
    }

    @Override
    public void voltarPg() {
        this.pgAtual --;
    }
}
