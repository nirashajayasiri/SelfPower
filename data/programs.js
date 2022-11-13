const PROGRAMS = [
    {
        id: 1,
        title:"Pottery WorkShop",
        desc: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada",
        url:"Learn more",
        image: require('../assets/program1.png')
    },
    {
        id: 2,
        title:"Mushroom farming workshop",
        desc: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada",
        url:"Learn more",
        image: require('../assets/program2.png')
    },
    {
        id: 3,
        title:"Tailoring seminar & training",
        desc: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada",
        url:"Learn more",
        image: require('../assets/program3.png')
    },
    {
        id: 4,
        title:"Cane WorkShop",
        desc: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada",
        url:"Learn more",
        image: require('../assets/program4.png')
    },
    {
        id: 5,
        title:"Cane WorkShop",
        desc: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada",
        url:"Learn more",
        image: require('../assets/program4.png')
    }
]

export function getPrograms(){
    return PROGRAMS;
}

export function getProgram(id){
    return PROGRAMS.find((program) => program.id == id);
}