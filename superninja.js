class Ninja {
    constructor(name, health = 100, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }

    sayName() {
        console.log('my name is ' + this.name);
    }


    showStats() {
        console.log('Name : '+ this.name + ',', 'Health : ' + this.health + ',', 'Strength : ' + this.strength + ',', 'Speed : ' + this.speed);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + ' drank the sake.');
    }

}

class Sensei extends Ninja{
    constructor(name, health, strength, speed) {
        super(name, health = 210, strength  = 10, speed = 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

const ninja1 = new Ninja("Matt Sherman");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();