
class Persona {

    /**
     * Initialize attributes Hero with zero case nothing defined
     * @param {type} name
     * @param {type} gender
     * @param {type} level
     * @returns {Hero}
     */
    constructor( name, gender, level ) {
        this.name   = !(name  ) ? 'Player' : name;
        this.gender = !(gender) ? 'M'      : gender;
        this.level  = !(level ) ? 0        : level;
        this.class  = null;
        this.life   = 100;
    }

    setClass( value ) {
        var _class = ['Magic', 'Fighter'];
        this.class = _class[value];
    }

    setLevel ( value ) { this.level += value; } 
    setDamage( value ) { this.life = (this.life - value) < 1   ? 0   : this.life - value; } 
    setLife  ( value ) { this.life = (this.life + value) > 100 ? 100 : this.life + value; }

}

class Hero extends Persona {

    wellcome() {
        return 'Hello Hero ' + this.class + ' ' + this.name;
    }

}

class Attribute {

    /**
     * Initialize defualt attributes with zero
     * @param {type} strength
     * @param {type} dexterity
     * @param {type} endurance
     * @param {type} speed
     * @param {type} inteligence
     * @param {type} wisdom
     * @param {type} perception
     * @param {type} concentration
     * @returns {Attribute}
     */
    constructor( strength, dexterity, endurance, speed, inteligence ,wisdom, perception, concentration ) {
        this.strength      = !(strength     ) ? 0 : strength;
        this.dexterity     = !(dexterity    ) ? 0 : dexterity;
        this.endurance     = !(endurance    ) ? 0 : endurance;
        this.speed         = !(speed        ) ? 0 : speed;
        this.inteligence   = !(inteligence  ) ? 0 : inteligence;
        this.wisdom        = !(wisdom       ) ? 0 : wisdom;
        this.perception    = !(perception   ) ? 0 : perception;
        this.concentration = !(concentration) ? 0 : concentration;
    }

    setStrength     ( value ) { this.strength      += value; }
    setDexterity    ( value ) { this.dexterity     += value; }
    setEndurance    ( value ) { this.endurance     += value; }
    setSpeed        ( value ) { this.speed         += value; }
    setInteligence  ( value ) { this.inteligence   += value; }
    setWisdom       ( value ) { this.wisdom        += value; }
    setPerception   ( value ) { this.perception    += value; }
    setConcentration( value ) { this.concentration += value; }

}

class Skills {
    
    /**
     * Initialize defualt skills with zero
     * @param {type} bandage
     * @param {type} fencing
     * @param {type} luck
     * @param {type} survival
     * @param {type} swiming
     * @param {type} magic
     * @returns {Skills}
     */
    constructor( bandage, fencing, luck, survival , swiming, magic ) {
        this.bandage  = !(bandage ) ? 0 : bandage;
        this.fencing  = !(fencing ) ? 0 : fencing;
        this.luck     = !(luck    ) ? 0 : luck;
        this.survival = !(survival) ? 0 : survival;
        this.swiming  = !(swiming ) ? 0 : swiming;
        this.magic    = !(magic   ) ? 0 : magic;
    }
    
    setBandage ( value ) { this.bandage  += value; }
    setFencing ( value ) { this.fencing  += value; }
    setLuck    ( value ) { this.luck     += value; }
    setSurvival( value ) { this.survival += value; }
    setSwiming ( value ) { this.swiming  += value; }
    setMagic   ( value ) { this.magic    += value; }
    
}



var hero = new Hero();
console.log(hero.name  );
console.log(hero.setClass(0));
hero.setLevel(1);
hero.setLevel(1);
hero.setLevel(1);
console.log(hero.level);
console.log(hero.class);
console.log(hero.wellcome());

console.log('life: ' + hero.life);
hero.setDamage(5);
hero.setDamage(8);
console.log('life: ' + hero.life);
hero.setLife(4);
console.log('life: ' + hero.life);

var ObjAttr = new Attribute();
console.log(ObjAttr.speed   );
ObjAttr.setSpeed(1);
ObjAttr.setSpeed(1);
ObjAttr.setSpeed(1);
ObjAttr.setSpeed(2);
console.log(ObjAttr.speed   );
