// Code your solution here
function findMatching(drivers1, query) {
    return drivers1.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // drivers array
  const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  
  console.log(findMatching(drivers1, 'Bobby'));
  // Output: ['Bobby', 'Bobby']
  
  console.log(findMatching(drivers1, 'Sammy'));
  // Output: ['Sammy']


function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // drivers
  console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'], 'Sa'));
  
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  // Example usage
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


  console.log(matchName('drivers', 'Bobby'));