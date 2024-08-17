package Encapsulamento;

public class ControleRemoto extends Controlador {
    private int volume;
    private boolean ligado, tocando;

    public ControleRemoto() {
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

    public boolean isTocando() {
        return tocando;
    }

    public void setTocando(boolean tocando) {
        this.tocando = tocando;
    }

    @Override
    public void ligar() {
        this.ligado = true;
    }

    @Override
    public void desligar() {
        this.ligado = false;
    }

    @Override
    public void abrirMenu() {
        System.out.println("----- MENU -----");
        System.out.println("Está ligado? " + this.ligado);
        System.out.println("Está tocando? " + this.tocando);
        System.out.println("Volume " + this.volume);
//        for(int i = 0; i <= this.getVolume(); i += 10){
//            System.out.println("[]");
//        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fchando menu...");
    }

    @Override
    public void aumentarVolume(){
        if(this.isLigado()){
            this.setVolume(this.getVolume() + 1) ;
        }
    }

    @Override
    public void diminuirVolume(){
        if(this.isLigado()){
            this.setVolume(this.getVolume() - 1);
        }
    }

    @Override
    public void mutar() {
        if(this.isLigado() && this.getVolume() > 0){
            this.setVolume(0);
        }
    }

    @Override
    public void desMutar() {
        if(this.isLigado() && this.getVolume() == 0){
            this.setVolume(30);
        }
    }

    @Override
    public void play() {
        if(this.isLigado() && !this.isTocando()){
            this.setTocando(true);
        }
    }

    @Override
    public void pause() {
        if(this.isLigado() && this.isTocando()){
            this.setTocando(false);
        }
    }
}
