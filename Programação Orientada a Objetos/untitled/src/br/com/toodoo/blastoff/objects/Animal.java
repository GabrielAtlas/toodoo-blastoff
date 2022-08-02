package br.com.toodoo.blastoff.objects;

public abstract class Animal {

    private char skinColor;
    protected float weight;
    protected int age, members;

    public Animal(char skinColor, float weight, int age, int members){
        this.skinColor = skinColor;
        this.weight = weight;
        this.age = age;
        this.members = members;
    }

    public char getSkinColor() {
        return skinColor;
    }

    public void setSkinColor(char skinColor) {
        this.skinColor = skinColor;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getMembers() {
        return members;
    }

    public void setMembers(int members) {
        this.members = members;
    }

    public abstract void move();
    public abstract void feed();
    public abstract void emitSound();

}
