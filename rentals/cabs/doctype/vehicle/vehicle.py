# Copyright (c) 2025, Amanullah and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Vehicle(WebsiteGenerator):
        def before_insert(self):
                self.title = f"{self.make} {self.model}, {self.year}"
