//Reference Type -->

//jodi kon property na thaka ar jodi toba optional chain use kora hoba ('?')
const user: {
    company: 'Programming Hero'; //type ---> literal types (kono property fixed jonno literal types use korta hoba)

    //company: string 'Programming Hero'; // string use kora modified korta para jai

    //readonly company: string ; // string use kora modified kora hoy ta kaz korba na because 'readonly' jodi thaka

    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Gopal',
    //middleName: 'Basak',
    lastName: 'Dip',
    isMarried: true,

};

