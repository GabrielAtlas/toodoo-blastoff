package br.com.toodoo.blastoff;

import br.com.toodoo.blastoff.objects.Animal;
import br.com.toodoo.blastoff.objects.Bird;
import br.com.toodoo.blastoff.objects.Fish;

public class Main {

    public static void main(String[] args) {

        Animal animal = new Bird('B', 4, 1, 4);

        animal.emitSound();
        animal.feed();

        Fish fish = new Fish('B', 7, 1, 2);

        fish.makeBubble();

    }

}