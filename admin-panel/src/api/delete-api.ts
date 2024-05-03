const deleteCardAPI = async (id: string): Promise<void> => {
  await fetch(`https://api/bicycle/delete/${id}`, { method: 'DELETE' });
};

export default deleteCardAPI;
