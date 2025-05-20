// Copyright (c) 2025, Amanullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    rate(frm){
        frm.trigger("update_total_amt")
    },

    update_total_amt(frm){
        let totalDistance = 0
        for (let item of frm.doc.ride_details){
             totalDistance += item.distance
        } 

        let amt = totalDistance * frm.doc.rate;
        frm.set_value("total",amt);
    }
});


frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {
        
	},

    distance(frm){
        frm.trigger("update_total_amt")
    },

    ride_details_remove(frm){
        frm.trigger("update_total_amt")
    }
});