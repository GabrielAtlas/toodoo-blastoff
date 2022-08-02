package br.com.toodoo.blastoff.objects;

public class Bird extends Animal {

    public Bird(char skinColor, float weight, int age, int members) {
        super(skinColor, weight, age, members);
    }

    @Override
    public void move() {
        System.out.println("Bird moving...");
    }

    @Override
    public void feed() {
        System.out.println("Bird Feeding..");
    }

    @Override
    public void emitSound() {
        System.out.println("Bird Emitting sound...");
    }

}
