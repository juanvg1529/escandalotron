console.log("hello!");

function escandalotron() {
  alert("Hello There!, please enter the age of the persons to compare it!");
  let Agep1, Agep2, AGep3;
  Agep1 = Number(prompt("Age of first person"));
  Agep2 = Number(prompt("Age of second person"));
  Agep3 = Number(prompt("Age of third person"));
  if (
    (typeof Agep1 && typeof Agep2 && typeof Agep3) === "string" ||
    isNaN(Agep1) ||
    isNaN(Agep2) ||
    isNaN(Agep3)
  ) {
    alert("only type numbers please");
  }
  if (Agep1 > Agep2 && Agep1 > Agep3) {
    alert("The first person is the older");
  } else if (Agep2 > Agep1 && Agep2 > Agep3) {
    alert("The second person is the older");
  } else if (Agep3 > Agep1 && Agep3 > Agep2) {
    alert("The third person is the older");
  } else if (Agep1 === Agep2 && Agep1 === Agep3) {
    alert("All persons have the same age");
  }
}
