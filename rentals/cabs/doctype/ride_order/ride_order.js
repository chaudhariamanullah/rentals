// Copyright (c) 2025, Amanullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {

        if (frm.doc.status === "New"){
            frm.add_custom_button("Accept", ()=>{
                frm.doc.status = "Accepted";
                frm.save()
            },"Actions")

            frm.add_custom_button("Reject", ()=>{
                frm.doc.status = "Rejected";
                frm.save()
            },"Actions")

        }
	}
});
