const data = [
    ["Sycon", "Scypha", "Porifera", null],
    ["Spongilla", "Fresh water sponge", "Porifera", null],
    ["Euspongia", "Bath sponge", "Porifera", null],
    ["Physalia", "Portuguese man-of-war", "Coelenterata (Cnidaria)", null],
    ["Adamsia", "Sea anemone", "Coelenterata (Cnidaria)", null],
    ["Pennatula", "Sea-pen", "Coelenterata (Cnidaria)", null],
    ["Gorgonia", "Sea-fan", "Coelenterata (Cnidaria)", null],
    ["Meandrina", "Brain coral", "Coelenterata (Cnidaria)", null],
    ["Pleurobrachia", "Not available in NCERT", "Ctenophora", null],
    ["Ctenoplana", "Not available in NCERT", "Ctenophora", null],
    ["Taenia", "Tapeworm", "Platyhelminthes", null],
    ["Fasciola", "Liver fluke", "Platyhelminthes", null],
    ["Planaria", "Planaria is the common name itself( its scientific name in actually not written in ncert)", "Platyhelminthes", null],
    ["Ascaris", "Roundworm", "Aschelminthes", null],
    ["Wuchereria", "Filaria worm", "Aschelminthes", null],
    ["Ancylostoma", "Hookworm", "Aschelminthes", null],
    ["Nereis", "Nereis", "Annelida", null],
    ["Pheretima", "Earthworm", "Annelida", null],
    ["Hirudinaria", "Blood sucking leech", "Annelida", null],
    ["Apis", "Honey bee", "Arthropoda", null],
    ["Bombyx", "Silkworm", "Arthropoda", null],
    ["Laccifer", "Lac insect", "Arthropoda", null],
    ["Anopheles", "Not available in NCERT", "Arthropoda", null],
    ["Culex", "Not available in NCERT", "Arthropoda", null],
    ["Aedes", "Not available in NCERT", "Arthropoda", null],
    ["Locusta", "Locust", "Arthropoda", null],
    ["Limulus", "King crab", "Arthropoda", null],
    ["Pila", "Apple snail", "Mollusca", null],
    ["Pinctada", "Pearl oyster", "Mollusca", null],
    ["Sepia", "Cuttlefish", "Mollusca", null],
    ["Loligo", "Squid", "Mollusca", null],
    ["Octopus", "Devil fish", "Mollusca", null],
    ["Aplysia", "Sea hare", "Mollusca", null],
    ["Dentalium", "Tusk shell", "Mollusca", null],
    ["Chaetopleura", "Chiton", "Mollusca", null],
    ["Asterias", "Starfish", "Echinodermata", null],
    ["Echinus", "Sea urchin", "Echinodermata", null],
    ["Antedon", "Sea lily", "Echinodermata", null],
    ["Cucumaria", "Sea cucumber", "Echinodermata", null],
    ["Ophiura", "Brittle star", "Echinodermata", null],
    ["Balanoglossus", "Not available in NCERT", "Hemichordata", null],
    ["Saccoglossus", "Not available in NCERT", "Hemichordata", null],
    [" Ascidia", "Not available in NCERT", "Chordata, Urochordata(Protochordates)", null],
    [" Salpa", "Not available in NCERT", "Chordata, Urochordata(Protochordates)", null],
    [" Doliolum", "Not available in NCERT", "Chordata, Urochordata(Protochordates)", null],
    [" Amphioxus(Branchiostoma)", "Not available in NCERT", "Chordata, Cephalochordata(Protochordates)", null],
    [" Lancelet(Branchiostoma)", "Not available in NCERT", "Chordata, Cephalochordata(Protochordates)", null],
    ["Petromyzon", "Lamprey", "Chordata", "Cyclostomata"],
    ["Myxine", "Hagfish", "Chordata", "Cyclostomata"],
    ["Scoliodon", "Dog fish", "Chordata", "Chondrichthyes"],
    ["Pristis", "Saw fish", "Chordata", "Chondrichthyes"],
    ["Carcharodon", "Great white shark", "Chordata", "Chondrichthyes"],
    ["Trygon", "Sting ray", "Chordata", "Chondrichthyes"],
    ["Exocoetus", "Flying fish", "Chordata", "Osteichthyes"],
    ["Hippocampus", "Sea horse", "Chordata", "Osteichthyes"],
    ["Labeo", "Rohu", "Chordata", "Osteichthyes"],
    ["Catla", "Katla", "Chordata", "Osteichthyes"],
    ["Clarias", "Magur", "Chordata", "Osteichthyes"],
    ["Betta", "Fighting fish", "Chordata", "Osteichthyes"],
    ["Pterophyllum", "Angel fish", "Chordata", "Osteichthyes"],
    ["Bufo", "Toad", "Chordata", "Amphibia"],
    ["Rana", "Frog", "Chordata", "Amphibia"],
    ["Hyla", "Tree frog", "Chordata", "Amphibia"],
    ["Salamandra", "Salamander", "Chordata", "Amphibia"],
    ["Ichthyophis", "Limbless amphibian", "Chordata", "Amphibia"],
    ["Chelone", "Turtle", "Chordata", "Reptilia"],
    ["Testudo", "Tortoise", "Chordata", "Reptilia"],
    ["Chameleon", "Tree lizard", "Chordata", "Reptilia"],
    ["Calotes", "Garden lizard", "Chordata", "Reptilia"],
    ["Crocodilus", "Crocodile", "Chordata", "Reptilia"],
    ["Alligator", "Alligator", "Chordata", "Reptilia"],
    ["Hemidactylus", "Wall lizard", "Chordata", "Reptilia"],
    ["Naja", "Cobra", "Chordata", "Reptilia"],
    ["Bangarus", "Krait", "Chordata", "Reptilia"],
    ["Vipera", "Viper", "Chordata", "Reptilia"],
    ["Corvus", "Crow", "Chordata", "Aves"],
    ["Columba", "Pigeon", "Chordata", "Aves"],
    ["Psittacula", "Parrot", "Chordata", "Aves"],
    ["Struthio", "Ostrich", "Chordata", "Aves"],
    ["Pavo", "Peacock", "Chordata", "Aves"],
    ["Aptenodytes", "Penguin", "Chordata", "Aves"],
    ["Neophron", "Vulture", "Chordata", "Aves"],
    ["Ornithorhynchus", "Platypus", "Chordata", "Mammalia"],
    ["Macropus", "Kangaroo", "Chordata", "Mammalia"],
    ["Pteropus", "Flying fox", "Chordata", "Mammalia"],
    ["Camelus", "Camel", "Chordata", "Mammalia"],
    ["Macaca", "Monkey", "Chordata", "Mammalia"],
    ["Rattus", "Rat", "Chordata", "Mammalia"],
    ["Canis", "Dog", "Chordata", "Mammalia"],
    ["Felis", "Cat", "Chordata", "Mammalia"],
    ["Elephas", "Elephant", "Chordata", "Mammalia"],
    ["Equus", "Horse", "Chordata", "Mammalia"],
    ["Delphinus", "Common dolphin", "Chordata", "Mammalia"],
    ["Balaenoptera", "Blue whale", "Chordata", "Mammalia"],
    ["Panthera tigris", "Tiger", "Chordata", "Mammalia"],
    ["Panthera leo", "Lion", "Chordata", "Mammalia"]
];


let currentIndex;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function displayNextQuestion() {
    currentIndex = getRandomIndex(data.length);
    const [sn, cn, p, c] = data[currentIndex];
    document.getElementById("scientific-name").textContent = `Scientific Name (SN): ${sn}`;
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
}

function checkAnswer(event) {
    if (event.key === "Enter") {
        const [sn, cn, p, c] = data[currentIndex];
        const userInput = document.getElementById("user-input").value.trim().toLowerCase();
        const result = document.getElementById("result");
        let resultText = "";

        if (userInput === cn.toLowerCase() || userInput === p.toLowerCase()) {
            resultText += "Correct!\n";
            resultText += `Common Name (CN): ${cn}\n`;
            resultText += `Phylum (P): ${p}\n`;
            if (c) {
                resultText += `Class (C): ${c}\n`;
            }
        } else {
            resultText += "Incorrect.\n";
            resultText += `Common Name (CN): ${cn}\n`;
            resultText += `Phylum (P): ${p}\n`;
            if (c) {
                resultText += `Class (C): ${c}\n`;
            }
        }

        result.textContent = resultText;
        displayNextQuestion();
    }
}

document.getElementById("user-input").addEventListener("keydown", checkAnswer);
displayNextQuestion();
