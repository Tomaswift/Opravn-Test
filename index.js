function zoo(papousci, lions, girrafes) {
  let NohyPaposka = 2;
  let NohyLva = 4;
  let NohyZirafy = 4;

  let Papous = papousci * NohyPaposka;
  let Lvove = lions * NohyLva;
  let Girafs = NohyZirafy * girrafes;

  let suma = Papous + Lvove + Girafs;
  return suma;
}
console.log(zoo(2, 4, 1));

function soucetCisel(cisla) {
  let suma = 0;
  for (let i = 0; i < cisla.length; i++) {
      suma += cisla[i];
  }
  return suma;
}

console.log(soucetCisel([1,2,3]))



