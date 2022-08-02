package br.com.toodoo.blastoff.objects;

public class Reptile extends Animal {

    public Reptile(char skinColor, float weight, int age, int members) {
        super(skinColor, weight, age, members);
    }

    @Override
    public void move() {
        System.out.println("Reptile moving...");
    }

    @Override
    public void feed() {
        System.out.println("Reptile Feeding..");
    }

    @Override
    public void emitSound() {
        System.out.println("Reptile Emitting sound...");
    }

}
