export const fetchLocalAPIbyCategory = async (category: string) =>{
  const BASE_URL = "/SpaceTourismWebsite";
  try {
    const response = await fetch(`${BASE_URL}/data.json`);
    console.table({
      'Your catergory is': category, 
      'Your response is': response});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      return jsonData[category] || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
}