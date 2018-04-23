function downloadpageoffline(id)
{
   jQuery(document).ready(function($)
   {
     
      $.ajax({
                    type: "GET",
                    url: 'http://buddy.na/api/getbuddypages/'+id,
                    dataType:'json',                    
                    success: function (data) {
                       var JSONObject = JSON.stringify(data);
                       
                      // var JSONObject = JSONObject.stringify(data);
                      var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
                     db.transaction(function (tx) {   
   tx.executeSql('CREATE TABLE IF NOT EXISTS pages (id INTEGER AUTO_INCREMENT, page_id, user_id,location_id,longitude,latitude,virtualtour_link,contact_name,contact_position,contact_email,name,detail TEXT,postal_address,telephone,cellphone,fax,email,street_name,website,image_name,image_name_thumb,icon_image_name,gallery_limit,products_limit,link_name)'); 
   
   tx.executeSql('insert into pages (page_id, user_id,location_id,longitude,latitude,virtualtour_link,contact_name,contact_position,contact_email,name,detail,postal_address,telephone,cellphone,fax,email,street_name,website,image_name,image_name_thumb,icon_image_name,gallery_limit,products_limit,link_name) values ("'+data.place.id+'","'+data.place.user_id+'","'+data.place.location_id+'","'+data.place.longitude+'","'+data.place.latitude+'","'+data.place.virtualtour_link+'","'+data.place.contact_name+'","'+data.place.contact_position+'","'+data.place.contact_email+'","'+data.place.name+'","'+data.place.detail+'","'+data.place.postal_address+'","'+data.place.telephone+'","'+data.place.cellphone+'","'+data.place.fax+'","'+data.place.email+'","'+data.place.street_name+'","'+data.place.website+'","'+data.place.image_name+'","'+data.place.image_name_thumb+'","'+data.place.icon_image_name+'","'+data.place.gallery_limit+'","'+data.place.products_limit+'","'+data.place.link_name+'")'); 
});  
   db.transaction(function (tx) { 
   tx.executeSql('SELECT * FROM pages', [], function (tx, results) { 
      var len = results.rows.length, i; 
      msg = "<p>Found rows: " + len + "</p>"; 
     // document.querySelector('#status').innerHTML +=  msg; 
  
      for (i = 0; i < len; i++) { 
         alert(results.rows.item(i).user_id );
         alert(results.rows.item(i).detail ); 
      } 
  
   }, null); 
});
                        
   /* $('.get_apn_invt').html('');
    for (var key in JSONObject) {
     if (JSONObject.hasOwnProperty(key)) {
     //alert(JSONObject[key]["name"] + ", " + JSONObject[key]["image"]);
      var ats = '<div class="apn_sct"> <div class="invot_img"> <img class="on_inv_image" src=img/'+ JSONObject[key]["image"] +' </div> <div class="invot_nme"> '+ JSONObject[key]["name"] +' </div>  </div>';
      //alert(ats);
      $('.get_apn_invt').append(ats);
     }
    }    */

    // alert(json.array_results); 
    // $('#gt_invt').append('array_results');
                    }
                    
                    });
     //alert(id) 
   });
   
}