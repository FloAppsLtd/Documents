Field | Finnish | Swedish | English | Type | Format | Example | Notes
-- | -- | -- | -- | -- | -- | -- | --
id |  |  |  | Integer | Unique | 123 |
firstname | Etunimi | Förnamn | First name | Text |   |   |  
lastname | Sukunimi | Efternamn | Last name | Text |   |   | Required.
email | Sähköposti | E-post | Email | Text |   |   | Unique email address. Used for logging in. If the email already exists in the system, this value is automatically moved to invoice_email
invoice_email | Toissijainen sähköposti | Sekundär e-postadress | Secondary email | Text |   |   | Only fill in if different from default email.
phone | Puhelin | Telefon | Phone | Text |   |   |  
mobile | Matkapuhelin | Mobil | Mobile | Text |   | '+358441234567' | Any format is allowed. For sending SMS, use E.164 format
primary_address | Ensisijainen osoite | Primär adress | Primary address | Text | home, employer |   | Address to be printed on stickers and letters.
address | Osoite | Adress | Address | Text |   |   |  
extraaddress | Lisäosoite | Tilläggsfält för adress | Extra address | Text | 'PB 123' |   |  
postcode | Postinumero | Postnummer | Post code | Text |   |   |  
postoffice | Postitoimipaikka | Postanstalt | Post office | Text |   |   |  
residency | Kotipaikka | Hemort | Residency | Text |   |   | If other than postoffice
country | Maa | Land | Country | Text |   | 'USA' |  
title | Titteli | Titel | Title | Text |   |   |  
nationality | Kansallisuus | Nationalitet | Nationality | Text |   |   |  
language | Kieli | Språk | Language | Text | `fi-FI`, `sv-SE`, `en-GB` |   |  
is_foreign | Ulkomainen |  |  | Boolean | 0=no, 1=yes | 1 |  
gender | Sukupuoli | Kön | Gender | Integer | 1 = male, 2 = female, 3 = other, 4 = prefer not to say |   |  
born | Syntynyt | Född | Born | Date | dd.mm.yyyy | '31.12.1979' |  
info | Uutiskirjeet | Medlemspost | Newsletters | Integer | 1 = email, 2 = email and paper, 3 = no newsletter, 4 = paper | 1 |  
extrainfo | Lisätiedot | Tilläggsuppgifter | Extra info | Text |   |   |  
employer | Työnantaja | Arbetsgivare | Employer | Text |   |   |  
employer_address | Osoite (työnantaja) | Adress (arbetsgivare) | Address (employer) | Text |   |   |  
employer_extraaddress | Lisäosoite (työnantaja) | Tilläggsadress (arbetsgivare) | Extra address (employer) | Text |   |   |  
employer_postcode | Postinumero (työnantaja) | Postnummer (arbetsgivare) | Postcode (employer) | Text |   |   |  
employer_postoffice | Postitoimipaikka (työnantaja) | Postanstalt (arbetsgivare) | Post office (employer) | Text |   |   |  
employer_country | Maa (työnantaja) | Land (arbetsgivare) | Country (employer) | Text |   |   |  
invoice_preference | Toivottu laskutustapa | Önskad faktureringsmetod | Invoice preference | Integer | 1 = email, 2 = paper, 3 = e-invoice |   | To set as 1, email or invoice_email must be set. Automatically set to 3 if edi is set.
invoicing_address | Laskutusosoite | Faktureringsadress | Invoicing address | Text | Full address, please use line breaks (Alt + Enter or Cmd + Enter) | Yritys OyEsimerkkitie 533101 TAMPERE | Replaces both recipient's name and address on invoices.
businessid | Y-tunnus | FO-nummer | Business ID | Text |   |   |  
yourreference | Viite | Referens | Reference | Text |   |   | Printed as 'Your reference' on invoices sent to this person.
edi | EDI / OVT | EDI / OVT | EDI / OVT | Text |   |   |  
operator | Verkkolaskuoperaattori | Operatör för e-faktura | E-invoice operator | Text | Operator must be 6 to 15 characters with no spaces. | 'DABAFIHH' or '003710948874' |  
donations_edi | EDI / OVT lahjoituksia varten | EDI / OVT för donationer | EDI / OVT for donations | Text |   |   |  
donations_operator | Lahjoitusten verkkolaskuoperaattori | E-fakturaoperatör för donationer | E-invoice operator for donations | Text |   |   |  
member_card_valid_until | Jäsenkortti voimassa asti | Medlemskortet är giltigt till | Membership card valid until | Text | dd.mm.yyyy | '31.12.2035' |  
date_joined | Liittynyt | Blev medlem | Joined | Text | dd.mm.yyyy | '15.06.2023' |  
