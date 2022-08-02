package br.com.toodoo.blastoff.objects;

public class Fish extends Animal {

    public Fish(char skinColor, float weight, int age, int members) {
        super(skinColor, weight, age, members);
    }

    @Override
    public void move() {
        System.out.println("Fish moving...");
    }

    @Override
    public void feed() {
        System.out.println("Fish Feeding..");
    }

    @Override
    public void emitSound() {
        System.out.println("Fish Emitting sound...");
    }

    public void makeBubble(){
        System.out.println("Fish making a bubble...");
    }

}
