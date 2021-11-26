

if (options.minimum_price_per_night) {
  queryParams.push(`%${options.minimum_price_per_night}%`);
  if(queryParams.length === 1) {
    queryString += `WHERE cost_per_night >= $${queryParams.length} `;
  }
  else {
    queryString += `AND cost_per_night >= $${queryParams.length}`;
  }
}