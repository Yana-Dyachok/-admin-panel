const deleteCardAPI = async (id: string): Promise<void> => {
  await fetch(`https://bicycleapi.onrender.com/api/bicycle/delete/${id}`, { method: 'DELETE' });
};

export default deleteCardAPI;
