const data = [
    ["1951", "Family Planning"],
    ["1971", "Medical Termination of Pregnancy (MTP)"],
    ["1856 – 1863", "Gregor Mendel Experiments"],
    ["1865", "Mendel published his work on inheritance of characters (but remained unrecognized till 1900)"],
    ["1900", "Rediscovery of Mendel's results on inheritance of characters by de Vries, Correns, and von Tschermak"],
    ["1902", "Walter Sutton and Theodore Boveri proposed Chromosomal theory of inheritance"],
    ["1891", "Henking traced a specific nuclear structure all through spermatogenesis to understand mechanism of sex-determination"],
    ["1866", "Langdon described Down's syndrome"],
    ["1869", "Friedrich Meischer identified DNA as an acidic substance in nucleus and named it \"Nuclein\""],
    ["1953", "James Watson and Francis Crick proposed double helix structure of DNA"],
    ["1928", "Transforming principle by Fredrick Griffith"],
    ["1933 – 44", "Biochemical characterization of Transforming principle by Oswald Avery, Colin MacLeod and Maclyn McCarty"],
    ["1952", "Unequivocal proof that DNA is genetic material by Alfred Hershey and Martha Chase"],
    ["1953", "Watson and Crick proposed semiconservative DNA replication"],
    ["1958", "Experimental proof for semiconservative DNA replication by Matthew Meselson and Franklin Stahl"],
    ["1990 – 2003", "Human Genome Project (HGP)"],
    ["May, 2006", "Sequence of Chromosome-1 was completed"],
    ["20 billion years", "Age of universe"],
    ["4.5 billion years", "Age of earth"],
    ["4 billion years back (500 million years after formation of earth)", "Life appeared on earth"],
    ["1953", "Miller Urey experiment"],
    ["3 billion years back", "The first non-cellular life originated"],
    ["2000 million years ago", "First cellular form of life appeared"],
    ["1920", "The phenomenon of natural selection observed after industrialization in England"],
    ["500 mya", "Invertebrates were formed and active"],
    ["350 mya", "Jawless fish evolved"],
    ["320 mya", "Sea weeds and few plants existed"],
    ["350 mya", "Fish with stout and strong fins could move on land and go back to water"],
    ["1938", "Coelencanth was caught in South Africa"],
    ["200 mya", "Some of the land reptiles (Ichthyosaurs) went back into water to evolve into fish like reptiles"],
    ["About 65 mya", "Dinosaurs suddenly disappeared from earth"],
    ["15 mya", "Origin of Dryopithecus and Ramapithecus"],
    ["3 – 4 mya", "Australopithecus"],
    ["2 mya", "Homo habilis"],
    ["1.5 mya", "Homo erectus (Java man)"],
    ["100,000 – 40,000 years ago", "Homo sapiens neanderthalesis (Neanderthal man)"],
    ["75,000 – 10,000", "Homo sapiens (Modern man)"],
    ["1981", "AIDS was first reported"],
    ["Mid 1960s", "Green revolution"],
    ["1960 – 2000", "Wheat production increased from 11 million tons to 75 million tons, Rice production increased from 35 million to 89.5 million tons"],
    ["1963", "Semi-dwarf varieties of wheat – Sonalika and Kalyan Sona were introduced in India"],
    ["2000", "Maize hybrids having twice the amount of amino acids, lysine and tryptophan were developed"],
    ["1950s", "Totipotency"],
    ["1972", "Construction of first Recombinant DNA by Stanley Cohen and Herbert Boyer"],
    ["1963", "Two enzymes responsible for restricting the growth of bacteriophage in Escherichia coli were isolated"],
    ["1990", "First gene therapy given to a four year old girl with ADA deficiency"],
    ["1997", "The first transgenic cow, Rosie, produced human protein-enriched milk (2.5 grams per litre)"],
    ["1920s", "The prickly pear cactus introduced into Australia"],
    ["1992", "\"The Earth summit\" – Rio de Janeiro"],
    ["1986", "Environment Protection Act"],
    ["1981", "Air (Prevention and Control of Pollution) Act came into force"],
    ["1987", "Air (Prevention and Control of Pollution) Act was amended to include noise as an air pollutant"],
    ["1990s", "Delhi ranked 4th among the 41 most polluted cities in the world"],
    ["(by the end of) 2002", "All the buses of Delhi were converted to run on CNG"],
    ["1997 – 2005", "A substantial fall in CO2 and SO2 levels has been found in Delhi"],
    ["1974", "Water (Prevention and Control of Pollution) Act"],
    ["1974", "Chipko Movement"],
    ["1980s", "Joint Forest Management (JFM)"],
    ["1987", "Montreal Protocol signed at Canada"],
    ["1989", "Montreal protocol (effective)"],
    ["1969", "Five Kingdom Classification by R.H. Whittaker"],
    ["1892", "Virus was named and discovered by Dimitri Ivanowsky"],
    ["1935", "W.M. Stanley showed virus could be crystallized"],
    ["1971", "T.O. Diener discovered viroids"],
    ["1838", "Matthias Schleiden examined a large number of plants and observed that all plants are composed of different kinds of cell which form the tissues of the plant"],
    ["1839", "Theodore Schwann studied different types of animal cells and reported that cells had a thin outer layer which is today known as 'plasma membrane'"],
    ["1855", "Rudolf Virchow explained that cells arises from pre-existing cells (Omnis cellula-e cellula)"],
    ["1898", "Camillo Golgi discovered golgi apparatus"],
    ["1860", "Julius von Sachs discovered hydroponics"],
    ["1770", "Joseph Presley revealed essential role of air in the growth of green plant"],
    ["1774", "Joseph Presley discovered oxygen"],
    ["1854", "Julius von Sachs provided evidence for the production of glucose when plants grow"],
    ["1905", "Blakman's law of limiting factor"],
    ["1926", "Gibbrellic acid was discovered by E. Kurosawa"],
    ["1955", "Miller et al. identified and crystallized cytokinins"],
    ["Mid 1960s", "Inhibitor-B, abscission II and dormin were reported"],
    ["1910", "H.H cousins discovered ethylene"]
];

let currentIndex;
let askedIndices = [];

function getRandomIndex(max) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * max);
    } while (askedIndices.includes(randomIndex));
    askedIndices.push(randomIndex);
    return randomIndex;
}

function displayNextQuestion() {
    if (askedIndices.length === data.length) {
        askedIndices = [];
    }
    currentIndex = getRandomIndex(data.length);
    const [year, event] = data[currentIndex];
    document.getElementById("event-description").textContent = event;
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
}

function checkAnswer(event) {
    if (event.key === "Enter") {
        const [year, eventDescription] = data[currentIndex];
        const userInput = document.getElementById("user-input").value.trim();
        const result = document.getElementById("result");
        let resultText = "";

        if (userInput === year) {
            resultText += "Correct!\n";
        } else {
            resultText += "Incorrect.\n";
        }
        resultText += `Year: ${year}\n`;

        result.textContent = resultText;
        displayNextQuestion();
    }
}

document.getElementById("user-input").addEventListener("keydown", checkAnswer);
displayNextQuestion();