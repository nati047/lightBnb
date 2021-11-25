SELECT properties.city as city, count(reservations.*) as total_reservatons
FROM properties 
JOIN reservations ON property_id = properties.id
GROUP BY properties.city
ORDER BY total_reservatons DESC;