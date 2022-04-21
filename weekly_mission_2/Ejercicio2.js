const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

explorers.forEach(element => {
    console.log(element.name),
    console.log(element.stack) 
})

const stacks = explorers.map(element => {
    return element.stack
})

console.log(stacks)

const explorersConJS = explorers.filter(element => {
    return element.stack.includes("js")
})

console.log(explorersConJS)

const primerExporerCDMX = explorers.find(element => {
    return element.city === "CDMX"
})

console.log(primerExporerCDMX)

const sumaExercisesCompleted = explorers.reduce((acum, element) => {
    return acum + element.exercises_completed
}, 0)

console.log(sumaExercisesCompleted)

const propiedadEnTrue = explorers.some(element => {
    return element.missions.frontend.exercisesFinished
})

console.log(propiedadEnTrue)

const propiedadTodosEnTrue = explorers.every(element => {
    return element.missions.onboarding.isFinished
})

console.log(propiedadTodosEnTrue)