# Copyright (c) 2025, Amanullah and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def validate(self):
		if not self.rate:
			frappe.throw("Please enter a rate")
		total_distance = 0
		for item in self.ride_details:
			total_distance += item.distance
		self.total = total_distance * self.rate
