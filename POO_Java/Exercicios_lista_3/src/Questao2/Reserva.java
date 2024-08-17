package Questao2;

public class Reserva {
    private int id;
    private String data;
    private Passageiro passageiro;
    private Voo voo;

    public Reserva() {
    }

    public Reserva(int id, String data, Passageiro passageiro, Voo voo) {
        this.id = id;
        this.data = data;
        this.passageiro = passageiro;
        this.voo = voo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Passageiro getPassageiro() {
        return passageiro;
    }

    public void setPassageiro(Passageiro passageiro) {
        this.passageiro = passageiro;
    }

    public Voo getVoo() {
        return voo;
    }

    public void setVoo(Voo voo) {
        this.voo = voo;
    }

    @Override
    public String toString() {
        return "\nReserva {" +
                "id=" + id +
                ", data='" + data + '\'' + "}" +
                "\n" + passageiro +
                "\n" + voo;
    }
}
