const scientists = [
    { name: "Carolus Linnaeus", description: "Binomial Nomenclature, Used 'Systema Naturae' as the title of his publication, Two kingdom classification" },
    { name: "R.H Whittaker", description: "Five kingdom classification (1969)" },
    { name: "George Bentham & Joseph Dalton Hooker", description: "Natural classification system" },
    { name: "Aristotle", description: "Earliest to attempt scientific basis of classification" },
    { name: "Anton Von Leeuwenhoek", description: "First saw and described a live cell" },
    { name: "Dimitri Ivanowsky", description: "Coined the name 'virus' (1892)" },
    { name: "M.W. Beijerinek", description: "Demonstrated that the extract of the infected plants of tobacco could cause infection in healthy plants and called the fluids as Contagium vivum fluidum (infectious living fluid) (1898)" },
    { name: "W.M. Stanley", description: "Showed that the virus could be crystallised and crystals consist largely of proteins (1935)" },
    { name: "T.O. Diener", description: "Discovered 'viroids' (1971)" },
    { name: "Robert Brown", description: "Discovered Nucleus" },
    { name: "Matthias Schleiden", description: "Examined plants and observed that all plants are composed of different kinds of cells which form tissues of plant (1838)" },
    { name: "Theodore Schwann", description: "Studied animal cells and reported that cells had a thin outer layer, today known as 'Plasma Membrane'. Stated – Presence of cell wall is unique character of the plant (1839)" },
    { name: "Schwann", description: "Proposed the hypothesis that bodies of plants and animals are composed of cells and products of cells" },
    { name: "Schleiden & Schwann", description: "Cell Theory" },
    { name: "Rudolf Virchow", description: "Omnis cellulae-e cellulae (Modified Cell Theory) (1855)" },
    { name: "Singer & Nicolson", description: "Fluid mosaic model of plasma membrane (1972)" },
    { name: "Camillo Golgi", description: "Discovered Golgi apparatus (1898)" },
    { name: "George Palade", description: "Observed ribosomes as dense particles under electron microscope (1953)" },
    { name: "Robert Brown", description: "Describe nucleus as a cell organelle (1831)" },
    { name: "Flemming", description: "Gave the name 'Chromatin' to the material of nucleus" },
    { name: "Julius von Sachs", description: "Hydroponics (1860)" },
    { name: "Joseph Priestley", description: "Revealed the essential role of air in growth of plants (1770)" },
    { name: "Jen Ingenhousz", description: "Showed that the sunlight is essential to plant process (1730-1799)" },
    { name: "Julius von Sachs", description: "Provided evidence for the production of glucose when plants grow (1853)" },
    { name: "T.W. Engelmann", description: "Described the first action spectrum of photosynthesis (1843-1909)" },
    { name: "Blackman", description: "Law of limiting factors (1905)" },
    { name: "Gustav Embden, Otto Meyerhof, Parnas", description: "Glycolysis" },
    { name: "F.W. Went", description: "Isolated Auxin from tip of coleoptiles of oat seedlings" },
    { name: "E. Kurosawa", description: "Discovered Gibberellic acid (1926)" },
    { name: "Charles Darwin & Francis Darwin", description: "Observed that coleoptiles of Canary grass responded to unilateral illumination by growing towards the light source." },
    { name: "F. Skoog & co-workers", description: "Observed that internodal segments of tobacco stems the callus proliferated only if, in addition to auxins the nutrients medium was supported with one of the following – extract of vascular tissue, yeast extract, coconut milk or DNA" },
    { name: "Miller et al", description: "Identified Kinetin (1955)" },
    { name: "H.H. Cousins", description: "Discovered Ethylene (1910)" },
    { name: "Gregor Mendel", description: "Laws of Inheritance (1856-1863)" },
    { name: "De Vries, Correns & Von Tschermak", description: "Rediscovered Mendel's Results" },
    { name: "Walter Sutton & Theodore Boveri", description: "Proposed Chromosomal Theory of Inheritance (1962)" },
    { name: "Thomas Hunt Morgan", description: "Experimental verification of Chromosomal Theory of Inheritance" },
    { name: "Langdon Down", description: "Described Down Syndrome (1866)" },
    { name: "Friedrich Miescher", description: "Identified DNA as an acidic substance in Nucleus (named it 'Nuclein') (1869)" },
    { name: "James Watson & Francis Crick", description: "Proposed Double helical structure of DNA (1953)" },
    { name: "Erwin Chargaff", description: "Ratios between Adenine & Thymine & Guanine and Cytosine are constant and equals one" },
    { name: "Frederick Griffith", description: "Transforming Principle (Streptococcus pneumoniae) (1928)" },
    { name: "Oswald Avery, Colin Macleod & Maclyn McCarthy", description: "Biochemical characterization of transforming principle (1933-44)" },
    { name: "Alfred Hershey & Martha Chase", description: "Experimentally proved that the genetic material is DNA (worked with Bacteriophages) (1952)" },
    { name: "Watson & Crick", description: "Proposed 'Semi-Conservative nature of DNA Replication' (1953)" },
    { name: "Matthew Meselson & Franklin Stahl", description: "Experimental proof for 'Semiconservative Nature of DNA Replication' (1958)" },
    { name: "George Gamow", description: "Genetic code" },
    { name: "Har Gobind Khurana", description: "Developed chemical method to synthesize RNA molecules with defined combination of bases (homopolymers & copolymers)" },
    { name: "Marshal Nirenberg", description: "Developed cell-free system for protein synthesis" },
    { name: "Francois Jacob & Jacque Monod", description: "The Lac operon" },
    { name: "Alec Jeffreys", description: "DNA fingerprinting" },
    { name: "Early Greek Thinkers", description: "Theory of 'Panspermia'" },
    { name: "Louis Pasteur", description: "Life came from Pre-existing life" },
    { name: "Oparin & Haldane", description: "Proposed 'Chemical Evolution of Life'" },
    { name: "S.L. Miller", description: "Experimental proof for 'Chemical Evolution of Life'" },
    { name: "Charles Darwin", description: "Based on observations made during a sea voyage in a sail ship (H.M.S Beagle) concludes that existing life forms share similarities not only among themselves but also with life forms that existed millions of years ago" },
    { name: "Charles Darwin", description: "Natural selection & 'Survival of Fittest'" },
    { name: "Alfred Wallace", description: "Co-developed 'Theory of Natural Selection' with Darwin" },
    { name: "Ernst Haeckel", description: "Embryological support for Evolution" },
    { name: "Karl Ernst Von Baer", description: "Disapproved 'Embryological support for Evolution'" },
    { name: "Lamarck", description: "Proposed that 'Evolution of Life Forms is driven by use and disuse of organs" },
    { name: "Thomas Malthus", description: "His work inspired Darwin to refine Natural selection by starting a reason for meaningful competition between members of the same species" },
    { name: "Hugo DeVries", description: "Worked on 'Evening primrose' to put forth the idea of Mutations (Mutation caused Speciation → Saltation)" },
    { name: "Hardy – Weinberg", description: "Proposed that frequency of occurrence of alleles of a gene or a locus remain fixed & same through generations" },
    { name: "Kary Mullis", description: "Developed PCR (Polymerase Chain Reaction) (1980s)" },
    { name: "Stanley Cohen & Herbert Boyer", description: "Constructed the 'First Recombinant DNA' (1972)" },
    { name: "Eli Lilly", description: "Synthesized Human insulin (1983)" },
    { name: "Robert Constanza", description: "Put price tags on Nature's life support services" },
    { name: "Edward Wilson", description: "Father of Biodiversity (Described the combined diversity at all the levels of biological organization)" },
    { name: "Ahmed Khan", description: "Developed 'Polyblend', a fine powder of recycled modified plastic (Polyblend + Bitumen → Used to lay roads)" },
    { name: "Ramesh Chandra Dagar", description: "Integrated organic farming (Included bee-keeping, dairy management, water harvesting, composting & agriculture in a chain of processes)" },
    { name: "Sunderlal Bahuguna", description: "Chipko movement leader (1974)" },
    { name: "Alexander von Humboldt", description: "Species Area Relationships" },
    { name: "Paul Ehrlich", description: "Rivet popper hypothesis" }
];

const descriptionElement = document.getElementById('description');
const answerElement = document.getElementById('answer');
const showDescriptionButton = document.getElementById('showDescription');
const showAnswerButton = document.getElementById('showAnswer');

let currentScientist = null;
let remainingScientists = [...scientists]; // Create a copy of the scientists array

showDescriptionButton.addEventListener('click', () => {
  if (remainingScientists.length === 0) {
    // If there are no remaining scientists, reset the array
    remainingScientists = [...scientists];
  }

  const randomIndex = Math.floor(Math.random() * remainingScientists.length);
  currentScientist = remainingScientists[randomIndex];
  descriptionElement.textContent = currentScientist.description;
  answerElement.textContent = '';

  // Remove the selected scientist from the remaining scientists array
  remainingScientists.splice(randomIndex, 1);
});

showAnswerButton.addEventListener('click', () => {
  if (currentScientist) {
    answerElement.textContent = currentScientist.name;
  }
});