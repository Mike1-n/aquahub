const changeCustomerStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // Make sure you're sending { status: 'Active' or 'Inactive' }
  
    try {
      const { data, error } = await supabase
        .from('customers')
        .update({ status })
        .eq('id', id);
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      res.json({ data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  