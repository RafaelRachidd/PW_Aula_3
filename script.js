/* ========================================
   CONFIGURAÇÕES
======================================== */

const TOTAL_QUESTIONS = 15;

const TIME_PER_QUESTION = 15;


/* ========================================
   BANCO DE POKÉMON
======================================== */

const pokemonList = [

    {
        id: 1,
        name: "Bulbasaur",
        type: "Planta / Veneno"
    },

    {
        id: 2,
        name: "Ivysaur",
        type: "Planta / Veneno"
    },

    {
        id: 3,
        name: "Venusaur",
        type: "Planta / Veneno"
    },

    {
        id: 4,
        name: "Charmander",
        type: "Fogo"
    },

    {
        id: 5,
        name: "Charmeleon",
        type: "Fogo"
    },

    {
        id: 6,
        name: "Charizard",
        type: "Fogo / Voador"
    },

    {
        id: 7,
        name: "Squirtle",
        type: "Água"
    },

    {
        id: 8,
        name: "Wartortle",
        type: "Água"
    },

    {
        id: 9,
        name: "Blastoise",
        type: "Água"
    },

    {
        id: 10,
        name: "Caterpie",
        type: "Inseto"
    },

    {
        id: 11,
        name: "Metapod",
        type: "Inseto"
    },

    {
        id: 12,
        name: "Butterfree",
        type: "Inseto / Voador"
    },

    {
        id: 13,
        name: "Weedle",
        type: "Inseto / Veneno"
    },

    {
        id: 14,
        name: "Kakuna",
        type: "Inseto / Veneno"
    },

    {
        id: 15,
        name: "Beedrill",
        type: "Inseto / Veneno"
    },

    {
        id: 16,
        name: "Pidgey",
        type: "Normal / Voador"
    },

    {
        id: 17,
        name: "Pidgeotto",
        type: "Normal / Voador"
    },

    {
        id: 18,
        name: "Pidgeot",
        type: "Normal / Voador"
    },

    {
        id: 19,
        name: "Rattata",
        type: "Normal"
    },

    {
        id: 20,
        name: "Raticate",
        type: "Normal"
    },

    {
        id: 21,
        name: "Spearow",
        type: "Normal / Voador"
    },

    {
        id: 22,
        name: "Fearow",
        type: "Normal / Voador"
    },

    {
        id: 23,
        name: "Ekans",
        type: "Veneno"
    },

    {
        id: 24,
        name: "Arbok",
        type: "Veneno"
    },

    {
        id: 25,
        name: "Pikachu",
        type: "Elétrico"
    },

    {
        id: 26,
        name: "Raichu",
        type: "Elétrico"
    },

    {
        id: 27,
        name: "Sandshrew",
        type: "Terrestre"
    },

    {
        id: 28,
        name: "Sandslash",
        type: "Terrestre"
    },

    {
        id: 29,
        name: "Nidoran♀",
        type: "Veneno"
    },

    {
        id: 30,
        name: "Nidorina",
        type: "Veneno"
    },

    {
        id: 31,
        name: "Nidoqueen",
        type: "Veneno / Terrestre"
    },

    {
        id: 32,
        name: "Nidoran♂",
        type: "Veneno"
    },

    {
        id: 33,
        name: "Nidorino",
        type: "Veneno"
    },

    {
        id: 34,
        name: "Nidoking",
        type: "Veneno / Terrestre"
    },

    {
        id: 35,
        name: "Clefairy",
        type: "Fada"
    },

    {
        id: 36,
        name: "Clefable",
        type: "Fada"
    },

    {
        id: 37,
        name: "Vulpix",
        type: "Fogo"
    },

    {
        id: 38,
        name: "Ninetales",
        type: "Fogo"
    },

    {
        id: 39,
        name: "Jigglypuff",
        type: "Normal / Fada"
    },

    {
        id: 40,
        name: "Wigglytuff",
        type: "Normal / Fada"
    },

    {
        id: 41,
        name: "Zubat",
        type: "Veneno / Voador"
    },

    {
        id: 42,
        name: "Golbat",
        type: "Veneno / Voador"
    },

    {
        id: 43,
        name: "Oddish",
        type: "Planta / Veneno"
    },

    {
        id: 44,
        name: "Gloom",
        type: "Planta / Veneno"
    },

    {
        id: 45,
        name: "Vileplume",
        type: "Planta / Veneno"
    },

    {
        id: 46,
        name: "Paras",
        type: "Inseto / Planta"
    },

    {
        id: 47,
        name: "Parasect",
        type: "Inseto / Planta"
    },

    {
        id: 48,
        name: "Venonat",
        type: "Inseto / Veneno"
    },

    {
        id: 49,
        name: "Venomoth",
        type: "Inseto / Veneno"
    },

    {
        id: 50,
        name: "Diglett",
        type: "Terrestre"
    },

    {
        id: 51,
        name: "Dugtrio",
        type: "Terrestre"
    },

    {
        id: 52,
        name: "Meowth",
        type: "Normal"
    },

    {
        id: 53,
        name: "Persian",
        type: "Normal"
    },

    {
        id: 54,
        name: "Psyduck",
        type: "Água"
    },

    {
        id: 55,
        name: "Golduck",
        type: "Água"
    },

    {
        id: 56,
        name: "Mankey",
        type: "Lutador"
    },

    {
        id: 57,
        name: "Primeape",
        type: "Lutador"
    },

    {
        id: 58,
        name: "Growlithe",
        type: "Fogo"
    },

    {
        id: 59,
        name: "Arcanine",
        type: "Fogo"
    },

    {
        id: 60,
        name: "Poliwag",
        type: "Água"
    },

    {
        id: 61,
        name: "Poliwhirl",
        type: "Água"
    },

    {
        id: 62,
        name: "Poliwrath",
        type: "Água / Lutador"
    },

    {
        id: 63,
        name: "Abra",
        type: "Psíquico"
    },

    {
        id: 64,
        name: "Kadabra",
        type: "Psíquico"
    },

    {
        id: 65,
        name: "Alakazam",
        type: "Psíquico"
    },

    {
        id: 66,
        name: "Machop",
        type: "Lutador"
    },

    {
        id: 67,
        name: "Machoke",
        type: "Lutador"
    },

    {
        id: 68,
        name: "Machamp",
        type: "Lutador"
    },

    {
        id: 69,
        name: "Bellsprout",
        type: "Planta / Veneno"
    },

    {
        id: 70,
        name: "Weepinbell",
        type: "Planta / Veneno"
    },

    {
        id: 71,
        name: "Victreebel",
        type: "Planta / Veneno"
    },

    {
        id: 72,
        name: "Tentacool",
        type: "Água / Veneno"
    },

    {
        id: 73,
        name: "Tentacruel",
        type: "Água / Veneno"
    },

    {
        id: 74,
        name: "Geodude",
        type: "Pedra / Terrestre"
    },

    {
        id: 75,
        name: "Graveler",
        type: "Pedra / Terrestre"
    },

    {
        id: 76,
        name: "Golem",
        type: "Pedra / Terrestre"
    },

    {
        id: 77,
        name: "Ponyta",
        type: "Fogo"
    },

    {
        id: 78,
        name: "Rapidash",
        type: "Fogo"
    },

    {
        id: 79,
        name: "Slowpoke",
        type: "Água / Psíquico"
    },

    {
        id: 80,
        name: "Slowbro",
        type: "Água / Psíquico"
    },

    {
        id: 81,
        name: "Magnemite",
        type: "Elétrico / Aço"
    },

    {
        id: 82,
        name: "Magneton",
        type: "Elétrico / Aço"
    },

    {
        id: 83,
        name: "Farfetch'd",
        type: "Normal / Voador"
    },

    {
        id: 84,
        name: "Doduo",
        type: "Normal / Voador"
    },

    {
        id: 85,
        name: "Dodrio",
        type: "Normal / Voador"
    },

    {
        id: 86,
        name: "Seel",
        type: "Água"
    },

    {
        id: 87,
        name: "Dewgong",
        type: "Água / Gelo"
    },

    {
        id: 88,
        name: "Grimer",
        type: "Veneno"
    },

    {
        id: 89,
        name: "Muk",
        type: "Veneno"
    },

    {
        id: 90,
        name: "Shellder",
        type: "Água"
    },

    {
        id: 91,
        name: "Cloyster",
        type: "Água / Gelo"
    },

    {
        id: 92,
        name: "Gastly",
        type: "Fantasma / Veneno"
    },

    {
        id: 93,
        name: "Haunter",
        type: "Fantasma / Veneno"
    },

    {
        id: 94,
        name: "Gengar",
        type: "Fantasma / Veneno"
    },

    {
        id: 95,
        name: "Onix",
        type: "Pedra / Terrestre"
    },

    {
        id: 96,
        name: "Drowzee",
        type: "Psíquico"
    },

    {
        id: 97,
        name: "Hypno",
        type: "Psíquico"
    },

    {
        id: 98,
        name: "Krabby",
        type: "Água"
    },

    {
        id: 99,
        name: "Kingler",
        type: "Água"
    },

    {
        id: 100,
        name: "Voltorb",
        type: "Elétrico"
    },

    {
        id: 101,
        name: "Electrode",
        type: "Elétrico"
    },

    {
        id: 102,
        name: "Exeggcute",
        type: "Planta / Psíquico"
    },

    {
        id: 103,
        name: "Exeggutor",
        type: "Planta / Psíquico"
    },

    {
        id: 104,
        name: "Cubone",
        type: "Terrestre"
    },

    {
        id: 105,
        name: "Marowak",
        type: "Terrestre"
    },

    {
        id: 106,
        name: "Hitmonlee",
        type: "Lutador"
    },

    {
        id: 107,
        name: "Hitmonchan",
        type: "Lutador"
    },

    {
        id: 108,
        name: "Lickitung",
        type: "Normal"
    },

    {
        id: 109,
        name: "Koffing",
        type: "Veneno"
    },

    {
        id: 110,
        name: "Weezing",
        type: "Veneno"
    },

    {
        id: 111,
        name: "Rhyhorn",
        type: "Terrestre / Pedra"
    },

    {
        id: 112,
        name: "Rhydon",
        type: "Terrestre / Pedra"
    },

    {
        id: 113,
        name: "Chansey",
        type: "Normal"
    },

    {
        id: 114,
        name: "Tangela",
        type: "Planta"
    },

    {
        id: 115,
        name: "Kangaskhan",
        type: "Normal"
    },

    {
        id: 116,
        name: "Horsea",
        type: "Água"
    },

    {
        id: 117,
        name: "Seadra",
        type: "Água"
    },

    {
        id: 118,
        name: "Goldeen",
        type: "Água"
    },

    {
        id: 119,
        name: "Seaking",
        type: "Água"
    },

    {
        id: 120,
        name: "Staryu",
        type: "Água"
    },

    {
        id: 121,
        name: "Starmie",
        type: "Água / Psíquico"
    },

    {
        id: 122,
        name: "Mr. Mime",
        type: "Psíquico / Fada"
    },

    {
        id: 123,
        name: "Scyther",
        type: "Inseto / Voador"
    },

    {
        id: 124,
        name: "Jynx",
        type: "Gelo / Psíquico"
    },

    {
        id: 125,
        name: "Electabuzz",
        type: "Elétrico"
    },

    {
        id: 126,
        name: "Magmar",
        type: "Fogo"
    },

    {
        id: 127,
        name: "Pinsir",
        type: "Inseto"
    },

    {
        id: 128,
        name: "Tauros",
        type: "Normal"
    },

    {
        id: 129,
        name: "Magikarp",
        type: "Água"
    },

    {
        id: 130,
        name: "Gyarados",
        type: "Água / Voador"
    },

    {
        id: 131,
        name: "Lapras",
        type: "Água / Gelo"
    },

    {
        id: 132,
        name: "Ditto",
        type: "Normal"
    },

    {
        id: 133,
        name: "Eevee",
        type: "Normal"
    },

    {
        id: 134,
        name: "Vaporeon",
        type: "Água"
    },

    {
        id: 135,
        name: "Jolteon",
        type: "Elétrico"
    },

    {
        id: 136,
        name: "Flareon",
        type: "Fogo"
    },

    {
        id: 137,
        name: "Porygon",
        type: "Normal"
    },

    {
        id: 138,
        name: "Omanyte",
        type: "Pedra / Água"
    },

    {
        id: 139,
        name: "Omastar",
        type: "Pedra / Água"
    },

    {
        id: 140,
        name: "Kabuto",
        type: "Pedra / Água"
    },

    {
        id: 141,
        name: "Kabutops",
        type: "Pedra / Água"
    },

    {
        id: 142,
        name: "Aerodactyl",
        type: "Pedra / Voador"
    },

    {
        id: 143,
        name: "Snorlax",
        type: "Normal"
    },

    {
        id: 144,
        name: "Articuno",
        type: "Gelo / Voador"
    },

    {
        id: 145,
        name: "Zapdos",
        type: "Elétrico / Voador"
    },

    {
        id: 146,
        name: "Moltres",
        type: "Fogo / Voador"
    },

    {
        id: 147,
        name: "Dratini",
        type: "Dragão"
    },

    {
        id: 148,
        name: "Dragonair",
        type: "Dragão"
    },

    {
        id: 149,
        name: "Dragonite",
        type: "Dragão / Voador"
    },

    {
        id: 150,
        name: "Mewtwo",
        type: "Psíquico"
    },

    {
        id: 151,
        name: "Mew",
        type: "Psíquico"
    }

];



/* ========================================
   ELEMENTOS HTML
======================================== */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");

const homeButton =
    document.getElementById("home-btn");

const nextButton =
    document.getElementById("next-btn");


const questionElement =
    document.getElementById("question");

const pokemonImage =
    document.getElementById("pokemon-image");

const answersContainer =
    document.getElementById("answers");


const currentQuestionElement =
    document.getElementById("current-question");

const totalQuestionsElement =
    document.getElementById("total-questions");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");


const timerText =
    document.getElementById("timer-text");

const timerBar =
    document.getElementById("timer-bar");


const feedback =
    document.getElementById("feedback");

const feedbackIcon =
    document.getElementById("feedback-icon");

const feedbackTitle =
    document.getElementById("feedback-title");

const feedbackText =
    document.getElementById("feedback-text");


const finalScore =
    document.getElementById("final-score");

const correctAnswers =
    document.getElementById("correct-answers");

const wrongAnswers =
    document.getElementById("wrong-answers");

const percentage =
    document.getElementById("percentage");

const resultTitle =
    document.getElementById("result-title");

const resultDescription =
    document.getElementById("result-description");

const recordText =
    document.getElementById("record-text");

const bestScoreStart =
    document.getElementById("best-score-start");



/* ========================================
   VARIÁVEIS DO JOGO
======================================== */

let questions = [];

let currentQuestionIndex = 0;

let score = 0;

let correctCount = 0;

let wrongCount = 0;

let timer;

let timeLeft = TIME_PER_QUESTION;

let answered = false;



/* ========================================
   INICIALIZAÇÃO
======================================== */

totalQuestionsElement.textContent =
    TOTAL_QUESTIONS;


updateBestScore();



/* ========================================
   EMBARALHAR ARRAY
======================================== */

function shuffle(array) {

    return array
        .map(value => ({
            value,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

}



/* ========================================
   CRIAR PERGUNTAS
======================================== */

function createQuestions() {

    const selectedPokemon =
        shuffle([...pokemonList])
        .slice(0, TOTAL_QUESTIONS);


    questions = selectedPokemon.map(pokemon => {

        const wrongAnswers =
            shuffle(
                pokemonList.filter(
                    p => p.id !== pokemon.id
                )
            ).slice(0, 3);


        const answers = shuffle([
            pokemon,
            ...wrongAnswers
        ]);


        return {

            pokemon,

            answers

        };

    });

}



/* ========================================
   INICIAR QUIZ
======================================== */

function startQuiz() {

    createQuestions();

    currentQuestionIndex = 0;

    score = 0;

    correctCount = 0;

    wrongCount = 0;


    scoreElement.textContent = score;


    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");


    showQuestion();

}



/* ========================================
   MOSTRAR PERGUNTA
======================================== */

function showQuestion() {

    answered = false;


    clearInterval(timer);


    const currentQuestion =
        questions[currentQuestionIndex];


    const pokemon =
        currentQuestion.pokemon;


    currentQuestionElement.textContent =
        currentQuestionIndex + 1;


    questionElement.textContent =
        "Qual Pokémon é este?";


    pokemonImage.src =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;


    pokemonImage.alt =
        pokemon.name;


    progressBar.style.width =
        `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%`;


    feedback.className = "feedback";

    nextButton.disabled = true;


    answersContainer.innerHTML = "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    currentQuestion.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.innerHTML = `

                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${answer.name}
                </span>

            `;


            button.addEventListener(
                "click",
                () => selectAnswer(
                    button,
                    answer
                )
            );


            answersContainer.appendChild(button);

        }
    );


    startTimer();

}



/* ========================================
   TIMER
======================================== */

function startTimer() {

    timeLeft = TIME_PER_QUESTION;


    timerText.textContent =
        timeLeft;


    timerBar.style.width =
        "100%";


    timerBar.style.background =
        "#53d769";


    timer = setInterval(() => {

        timeLeft -= 0.1;


        if (timeLeft <= 0) {

            timeLeft = 0;

            clearInterval(timer);

            timeOut();

        }


        timerText.textContent =
            Math.ceil(timeLeft);


        timerBar.style.width =
            `${(timeLeft / TIME_PER_QUESTION) * 100}%`;


        if (timeLeft <= 5) {

            timerBar.style.background =
                "#ef3e3e";

        }

        else if (timeLeft <= 8) {

            timerBar.style.background =
                "#ffcb05";

        }

    }, 100);

}



/* ========================================
   TEMPO ESGOTADO
======================================== */

function timeOut() {

    if (answered) return;


    answered = true;

    wrongCount++;


    const currentQuestion =
        questions[currentQuestionIndex];


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.classList.add("disabled");


        const text =
            button.querySelector("span:last-child")
                .textContent
                .trim();


        if (
            text ===
            currentQuestion.pokemon.name
        ) {

            button.classList.add("correct");

        }

    });


    showFeedback(
        false,
        "Tempo esgotado!",
        `A resposta correta era ${currentQuestion.pokemon.name}.`
    );


    nextButton.disabled = false;

}



/* ========================================
   SELECIONAR RESPOSTA
======================================== */

function selectAnswer(
    selectedButton,
    selectedPokemon
) {

    if (answered) return;


    answered = true;


    clearInterval(timer);


    const correctPokemon =
        questions[currentQuestionIndex].pokemon;


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.classList.add("disabled");


        const text =
            button.querySelector("span:last-child")
                .textContent
                .trim();


        if (
            text ===
            correctPokemon.name
        ) {

            button.classList.add("correct");

        }

    });


    if (
        selectedPokemon.id ===
        correctPokemon.id
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;

        correctCount++;


        scoreElement.textContent =
            score;


        showFeedback(
            true,
            "Muito bem!",
            `${correctPokemon.name} está correto!`
        );

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        wrongCount++;


        showFeedback(
            false,
            "Ops!",
            `A resposta correta era ${correctPokemon.name}.`
        );

    }


    nextButton.disabled = false;

}



/* ========================================
   FEEDBACK
======================================== */

function showFeedback(
    isCorrect,
    title,
    message
) {

    feedback.className =
        `feedback show ${isCorrect ? "correct" : "wrong"}`;


    feedbackIcon.textContent =
        isCorrect ? "✓" : "✕";


    feedbackTitle.textContent =
        title;


    feedbackText.textContent =
        message;

}



/* ========================================
   PRÓXIMA PERGUNTA
======================================== */

function nextQuestion() {

    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        TOTAL_QUESTIONS
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}



/* ========================================
   FINALIZAR QUIZ
======================================== */

function finishQuiz() {

    clearInterval(timer);


    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    finalScore.textContent =
        score;


    correctAnswers.textContent =
        correctCount;


    wrongAnswers.textContent =
        wrongCount;


    const percentageValue =
        Math.round(
            (correctCount / TOTAL_QUESTIONS) * 100
        );


    percentage.textContent =
        `${percentageValue}%`;


    showResultMessage(
        percentageValue
    );


    saveBestScore();

}



/* ========================================
   MENSAGEM FINAL
======================================== */

function showResultMessage(
    percentageValue
) {

    if (percentageValue === 100) {

        resultTitle.textContent =
            "Mestre Pokémon! 👑";


        resultDescription.textContent =
            "Você conhece Kanto como ninguém!";

    }

    else if (percentageValue >= 80) {

        resultTitle.textContent =
            "Quase um Professor Oak! 🧠";


        resultDescription.textContent =
            "Seu conhecimento sobre Kanto é impressionante!";

    }

    else if (percentageValue >= 60) {

        resultTitle.textContent =
            "Líder de Ginásio! 🏆";


        resultDescription.textContent =
            "Você já está pronto para enfrentar muitos desafios.";

    }

    else if (percentageValue >= 40) {

        resultTitle.textContent =
            "Treinador Pokémon! 🎒";


        resultDescription.textContent =
            "Você conhece alguns Pokémon, mas ainda precisa treinar.";

    }

    else {

        resultTitle.textContent =
            "Novato Pokémon! 🥚";


        resultDescription.textContent =
            "Hora de começar sua jornada por Kanto!";

    }

}



/* ========================================
   RECORD
======================================== */

function saveBestScore() {

    const oldScore =
        Number(
            localStorage.getItem(
                "pokemonQuizBestScore"
            )
        ) || 0;


    if (score > oldScore) {

        localStorage.setItem(
            "pokemonQuizBestScore",
            score
        );


        recordText.textContent =
            "Novo recorde! 🎉";

    }

    else {

        recordText.textContent =
            `Seu recorde continua sendo ${Math.max(score, oldScore)} pontos.`;

    }


    updateBestScore();

}



/* ========================================
   ATUALIZAR RECORD
======================================== */

function updateBestScore() {

    const bestScore =
        Number(
            localStorage.getItem(
                "pokemonQuizBestScore"
            )
        ) || 0;


    bestScoreStart.textContent =
        bestScore;

}



/* ========================================
   VOLTAR AO INÍCIO
======================================== */

function goHome() {

    clearInterval(timer);


    quizScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    startScreen.classList.add("active");


    updateBestScore();

}



/* ========================================
   EVENTOS
======================================== */

startButton.addEventListener(
    "click",
    startQuiz
);


nextButton.addEventListener(
    "click",
    nextQuestion
);


restartButton.addEventListener(
    "click",
    startQuiz
);


homeButton.addEventListener(
    "click",
    goHome
);