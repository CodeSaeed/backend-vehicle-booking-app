const { Vehicle, Booking } = require('../models');

// Fetch vehicles by type
exports.getVehicles = async (req, res) => {
  const { type } = req.query;
  try {
    const vehicles = await Vehicle.findAll({ where: { type } });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create booking
exports.createBooking = async (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;
  try {
    // Check for overlapping bookings
    const existing = await Booking.findOne({
      where: { vehicleId, startDate: { [Op.lte]: endDate }, endDate: { [Op.gte]: startDate } },
    });

    if (existing) {
      return res.status(400).json({ message: 'Booking overlaps with an existing one' });
    }

    // Create new booking
    await Booking.create({ vehicleId, startDate, endDate });
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
