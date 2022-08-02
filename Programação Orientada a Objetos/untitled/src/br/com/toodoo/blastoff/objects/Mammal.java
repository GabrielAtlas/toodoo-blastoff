package br.com.toodoo.blastoff.objects;

public class Mammal extends Animal {

    public Mammal(char skinColor, float weight, int age, int members) {
        super(skinColor, weight, age, members);
    }

    @Override
    public void move() {
        System.out.println("Mammal moving...");
    }

    @Override
    public void feed() {
        System.out.println("Mammal Feeding..");
    }

    @Override
    public void emitSound() {
        System.out.println("Mammal Emitting sound...");
    }


}
