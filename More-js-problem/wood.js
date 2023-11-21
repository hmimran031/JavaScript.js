function woodCalculator(chairQuantity, tableQuantity, bedQuantuty) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantuty * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalsWood = woodCalculator(0, 1, 0);

console.log(totalsWood);
