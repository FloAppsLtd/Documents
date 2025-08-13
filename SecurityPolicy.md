# Flo Apps Security Policy

All data handled by Flo Apps Ltd is managed in accordance with the General Data Protection Regulation (GDPR; EU 2016/679).

We use data to provide services to our clients and to maintain our Customer Relationship Management (CRM). Flo Apps will keep client data as long as is required to fulfil these purposes, or as long as Flo Apps is obliged to do so in accordance with prevailing legislation.

Data that is shared with a third party will only be used in accordance with the purposes set forth in this Security Policy.

Should Flo Apps be subject to reorganisation, merger or sale, Flo Apps may transmit personal data to the relative third party, provided that such third party undertakes to handle the personal data in accordance with this Privacy Policy.

Flo Apps has taken technical and organisational measures to protect data from loss, manipulation or unauthorised access. Flo Apps adapts its security measures in accordance with progress and development of the relevant technical area.

## General Data Protection Regulation (GDPR)

The General Data Protection Regulation protects rights of EU citizens. We regularly review and update our agreements, internal processes, procedures, data systems, and documentation to ensure we are in compliance with the GDPR regulations.

Under the GDPR regulations, customers have extended rights on how services manage their data, such as the right to rectification, access, and portability of the data as well as the right to be forgotten.

# Data in CRM, project management, and emailing lists

We store clients' basic contact details in [FloMembers](https://flomembers.fi).

We are using FrontApp, based in the United States, to handle some of the email traffic and client communication. We have signed an EU Data Processing Addendum with them. See https://help.front.com/en/articles/2311 for more information.

To maintain email lists of our current and past clients, as well as potential future clients, we use Mailchimp whose servers may be located outside the EEA. We have signed an EU Data Processing Addendum with them. See https://mailchimp.com/help/about-the-general-data-protection-regulation/

# Security-related data

Our systems save such security-related data as logins and IP addresses. This data is deleted programmatically after a delay.

# Clients' data

Data owned by clients is stored exclusively within the European Economic Area (EEA) with these exceptions:

* during email transmissions, recipients' email addresses and email content may be handled outside the EEA
* 2FA SMS messages may be handled outside the EEA

By using [FloMembers membership management](https://flomembers.fi), FloRoyalties royalty management and / or bespoke database systems to keep personal data, client agrees that Flo Apps Ltd may manage client's data over the course of the agreement and beyond, until the end of the backups' life cycle.

While clients make the final decisions about the data they collect, data saved in database systems provided by Flo Apps typically include

1. such personal data as persons' names and addresses
1. such categories as "members" and "subscribers"

## Data procedures

Data is handled as follows:

### When client transfers data to us

When a new client requests us to prepare a data migration from their previous system, data is in most cases saved in:

 * HESK support system on `Linode Frankfurt` (cron removes the data after a timeout)
 * personal computer of the employee who converts the data (crons should be used to clean Downloads)

Client data may also be present in

 * personal emails (in case a client sends data by email **against** guidelines; it is every employee's duty that these attachments be deleted promptly)
 * printouts (these must be shredded)

### Live data and offsite backups

Flo Apps Ltd uses servers hosted by following service providers.

 * DigitalOcean (Amsterdam, NL; Frankfurt, DE)
   * see https://www.digitalocean.com/security/
   * offsite FloMembers backups are kept on Dropbox (see https://www.dropbox.com/help/security/general-data-protection-regulation) and mirrored back to Flo Apps DPO's computer
   * offsite WordPress backups are kept on [ManageWP](https://managewp.com/) and on Dropbox

 * Linode (Frankfurt, DE; London, UK)
   * see https://www.linode.com/compliance
   * offsite WordPress backups are kept on [ManageWP](https://managewp.com/) and on Dropbox

 * UpCloud (Espoo, FI; Helsinki, FI)
   * see https://upcloud.com/data-centres
   * ISO 27001 certification for security standards
   * offsite FloMembers backups are kept on UpCloud Helsinki

### FloMembers backups

Each live FloMembers server creates nightly backups of the data. These backups are also copied to an offsite server, in order to provide redundancy.

Restoring from backups is tested frequently.

### Closing an installation

If a FloMembers installation is closed, remaining backups are removed gradually over a period of 12 months. In the event client wants to transfer their data from one system to another, data can be downloaded in MS Excel format. In some services this may require Flo Apps' assistance.
 
## Server Level Security

We protect servers in following ways:

 1. Operating systems and server software are updated regularly. 
 1. We run automated software to scan server security.
 1. Server-wide firewalls are in place to regulate network traffic.
 1. Logs are kept for an extended period of time.
 1. We are using [Lynis](https://cisofy.com/lynis/) for server hardening.
 1. We are using Apache's `mod_security` module (web application firewall) on Edge server.
 1. We are using Apache's `mod_evasive` module (application layer module) on Edge server to protect against DoS attacks.
 1. Servers are overwritten before shutting them down when we migrate to new servers.

Services that are running on servers can be listed (`systemctl list-units --type service`) to make sure only necessary ones are running.

### Databases

Databases can not be accessed externally and only SSH key login is allowed.

MySQL security is enforced using `sudo mysql_secure_installation`. It can also be used to change `root` password for MySQL installation.

### Public Key Infrastructure

We use SSH keys to login to servers. Password login to servers is blocked.

SSH keys are also used in communication between GitHub repositories and the installations.

## Application Level Security (Generic)

### Client passwords

All passwords that system stores are saved using one-way hashing mechanisms. Flo Apps staff cannot view them. If a user loses their password, it cannot be retrieved — it must be reset.

### Dependabot

GitHub's [Dependabot](https://docs.github.com/en/code-security/dependabot) fixes vulnerable dependencies by raising automated pull requests with security updates.

### Logs

We keep a number of different logs on different levels. Some of these logs are cleaned automatically after a certain delay, some of them are kept permanently for security reasons. If a person has been removed permanently, their actions cannot be tracked down to the person after a certain delay. Anonymous data may still remain.

### SSL/TLS encryption

Backend applications' network traffic is encrypted with SSL.

## Application Level Security (FloMembers)

### Audit trail

Changes made to persons' data can be traced by user and date.

### Data downloads

Downloads are recorded in each installation and can be traced by user and date.

### Logins

All logins are written into a log. Login pages have brute force protection. System enforces medium password strength.

### Vulnerability scanners

[Intruder](https://www.intruder.io/) runs a full scan once a week and ad hoc tests whenever new threats emerge.

## Third-party integrations

We use 2FA authentication for logins into third-party services whenever possible.

### Bank transactions

Bank transaction files are kept on our servers for 180 days and deleted via CRON operation.

### GatewayAPI

We deliver SMS's via [GatewayAPI](https://gatewayapi.com/). They store the SMS messages for 30 days to display logs of sent messages.

The processing includes the following data about data subjects:

* telephone number
* message content
* sending organization

### Google

#### Ads

For FloMembers Mini clients, we're using Google AdSense to show ads.

#### Login

FloMembers users can use their Google credentials to log in.

### Maventa

Invoice-related data is transferred to [Maventa](https://maventa.com/) when e-invoices are sent. Client can delete this data via Maventa panel.

### Paytrail

Our clients use [Paytrail](https://www.paytrail.com/) to handle online payments in FloMembers.

### Posti Group

Address data that is fetched from [Posti](https://www.posti.fi/) is kept in text files on our servers for up to 3 months and deleted when the next address update batch is run.

### Postituspalvelu Navakka

We are using [Postituspalvelu Navakka](https://www.postituspalvelunavakka.fi/) to send letters by post. We have signed a Data Processing Agreement with them.

### Postmark

We use [Postmark](https://postmarkapp.com/) to deliver email and have signed a Data Processing Addendum with them. For more information on Postmark's EU Data Protection policy, see https://postmarkapp.com/eu-privacy

### Stripe

We may use Stripe to handle online payments in FloMembers. For more information, see [Stripe Privacy Center](https://stripe.com/en-fi/legal/privacy-center).

### Sweego

We use [Sweego](https://www.sweego.io/) to deliver transactional email.

### Tawk

We use Tawk to provide support chat. Tawk keeps email addresses for those persons who are logged into FloMembers when using the chat. For more information, see https://www.tawk.to/data-protection/dpa-data-processing-addendum/

### Twilio

Ad hoc SMS's and 2FA SMS's are sent via [Twilio](https://twilio.com/). Flo Apps Ltd and Twilio Inc. have signed an agreement on EC Data Protection.

During SMS delivery, Twilio may transfer data to the US; however, they are committed to complying with EU data protection requirements.

### Uploadcare

In some of our services, clients can upload and share files via [Uploadcare](https://uploadcare.com/). For more information, see their [Trust Center](https://uploadcare.com/about/trust/).

## Procedure for Security Breaches

 1. Determine
     * functional impact (to what extent does the incident affect the ability to provide services to users?)
     * information impact (was information compromised in any way and to what extent?)
     * recoverability (what kind of resources are needed to recover from the incident?)
 1. Containment
     * if needed, shut down services to block any further unauthorised use
     * services can be shut down at employees' own discretion - better safe than sorry
 1. Make sure situation cannot escalate
 1. Block any security holes
 1. Reopen services
 1. Inform clients and / or authorities in an appropriate and prompt manner
 1. Consider the lessons that can be drawn
 1. Write a report
     * incident details (what happened and when, how the incident was prioritized, what action was taken)
     * relevant investigation results, e.g. the cause of the incident and its business impact

### Informing clients

Flo Apps shall document all security breaches and shall notify clients of all breaches without undue delay, but no later than two (2) business days after Flo Apps becomes aware of a security infringement. The notification shall include the following information:

 1. a description of the security breach including information about what registered groups and person registers have been affected by the security infringement and the estimated number of these groups and registers
 1. the name and contact details of Flo Apps contact person responsible for investigating the security breach
 1. a description of the actual consequences and / or likely consequences of a security breach
 1. a description of the actions Flo Apps has taken in response to a security breach and mitigating its adverse effects

If the above information is not possible to provide in a single message, information may be provided in parts.

## Flo Apps Ltd premises

Flo Apps' office is restricted to authorized personnel and is monitored with cameras.

## Flo Apps Ltd employees

Flo Apps Ltd employees are committed to fulfilling data protection requirements imposed by both national and EU laws and maintaining a high level of confidentiality as regards any personal data. Employees are given regular briefings and training sessions on data protection issues.

In the unlikely event of security breaches by Flo Apps Ltd employees, persons can be subjected to

 1. verbal warnings
 1. written warnings
 1. termination of work agreement
 1. further sanctions imposed by law

Flo Apps is committed to employing sufficient human resources to maintain a high level of security.

## Subcontractors

Flo Apps Ltd may utilise subcontractors for e.g. developing new features. We do not share sensitive client data with the subcontractors.

## Data Protection Officer

Data Protection Officer for Flo Apps Ltd is Tapio Nurminen (CEO).

## Questions

You may contact us at any time for requests related to your expanded rights, we will be prepared to serve those requests:

 - Right to object: You may opt out of inclusion.
 - The right to be forgotten: in which case your data will be permanently deleted from our systems.
 - Right to ratification: we will update any information about you, which you wish to correct, amend or delete.
 - The right to access: we will describe the data we collect and how it is used.
 - The right to portability: we will provide an export of the data we have about you.
 
Flo Apps Ltd is also prepared to accept clients' audit requests as they may arise.

For information concerning Flo Apps's handling of personal data, please contact Flo Apps via email at feedback@floapps.com
