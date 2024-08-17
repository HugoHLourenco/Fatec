package Heranca_02;

public final class Bolsista extends Aluno{
    private float bolsa;

    public void pagarBolsa(){
        System.out.println("Pagando bolsa");
    }

    @Override
    public void pagarMensalidade(){
        System.out.println("Bolsista pagou a bolsa");
    }

    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }

    @Override
    public String toString() {
        return "Bolsista{" +
                "bolsa=" + bolsa +
                ", nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", idade=" + idade +
                '}';
    }
}
