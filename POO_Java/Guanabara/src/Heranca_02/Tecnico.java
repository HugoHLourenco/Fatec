package Heranca_02;

import java.util.PrimitiveIterator;

public class Tecnico extends Aluno{
    private String registroProfissional;

    public void praticar(){
        System.out.println("O aluno está praticando");
    }

    public String getRegistroProfissional() {
        return registroProfissional;
    }

    public void setRegistroProfissional(String registroProfissional) {
        this.registroProfissional = registroProfissional;
    }

    @Override
    public String toString() {
        return "Tecnico{" +
                "registroProfissional='" + registroProfissional + '\'' +
                ", nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", idade=" + idade +
                '}';
    }
}
