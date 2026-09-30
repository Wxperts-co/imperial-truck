interface ContactEmailPayload {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    description?: string;
}

interface EstimateEmailPayload extends ContactEmailPayload {
    selectedServices: string[];
}

/**
 * Admin Notification Email for Contact Form
 */
export const getAdminContactEmailHtml = (data: ContactEmailPayload) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid #e2e8f0;">
          
          <!-- HEADER WITH LOGO -->
          <tr>
            <td style="background-color:#0b1120;padding:24px 30px;text-align:center;border-bottom:4px solid #dc2626;">
              <img src="cid:companylogo" alt="Imperial Truck & Trailer Repair" style="max-height:54px;width:auto;display:inline-block;vertical-align:middle;" />
              <div style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:10px;">
                24/7 Roadside & Master Shop Facility
              </div>
            </td>
          </tr>

          <!-- TITLE BANNER -->
          <tr>
            <td style="background:linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);padding:24px 30px;border-bottom:1px solid #fee2e2;">
              <span style="display:inline-block;padding:4px 10px;background-color:#dc2626;color:#ffffff;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border-radius:20px;margin-bottom:8px;">
                New Website Lead
              </span>
              <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:800;line-height:1.3;">
                New Contact Form Submission
              </h1>
              <p style="margin:6px 0 0 0;color:#64748b;font-size:13px;">
                Received on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
              </p>
            </td>
          </tr>

          <!-- FORM DETAILS TABLE -->
          <tr>
            <td style="padding:28px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;width:35%;font-weight:600;">Full Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:700;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Phone Number</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <a href="tel:${data.phone}" style="color:#dc2626;font-weight:700;text-decoration:none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Email Address</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <a href="mailto:${data.email}" style="color:#dc2626;font-weight:700;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Address</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:600;">${data.address}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0 6px 0;color:#64748b;font-weight:600;" colspan="2">Message / Notes:</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:12px 16px;background-color:#f8fafc;border-radius:10px;color:#334155;line-height:1.5;font-size:13px;border:1px solid #e2e8f0;">
                    ${data.description ? data.description.replace(/\n/g, '<br/>') : '<em>No extra description provided.</em>'}
                  </td>
                </tr>
              </table>

              <!-- QUICK ACTION BUTTONS -->
              <div style="margin-top:24px;text-align:center;">
                <a href="tel:${data.phone}" style="display:inline-block;padding:12px 24px;background-color:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;border-radius:10px;margin-right:8px;">
                  📞 Call Customer
                </a>
                <a href="mailto:${data.email}" style="display:inline-block;padding:12px 24px;background-color:#0f172a;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;border-radius:10px;">
                  ✉️ Reply Email
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0b1120;padding:20px 30px;text-align:center;color:#94a3b8;font-size:11px;line-height:1.6;border-top:1px solid #1e293b;">
              <strong style="color:#ffffff;">Imperial Truck & Trailer Repair | Wash</strong><br />
              2142 W Yosemite Ave, Manteca, CA 95337 &bull; Phone: (209) 239-8111<br />
              <span style="color:#64748b;">This inquiry was sent automatically from your website contact form.</span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

/**
 * Customer Confirmation Email for Contact Form
 */
export const getCustomerContactEmailHtml = (data: ContactEmailPayload) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Imperial</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid #e2e8f0;">
          
          <!-- HEADER WITH LOGO -->
          <tr>
            <td style="background-color:#0b1120;padding:24px 30px;text-align:center;border-bottom:4px solid #dc2626;">
              <img src="cid:companylogo" alt="Imperial Truck & Trailer Repair" style="max-height:54px;width:auto;display:inline-block;vertical-align:middle;" />
              <div style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:10px;">
                24/7 Roadside & Master Shop Facility
              </div>
            </td>
          </tr>

          <!-- THANK YOU HERO -->
          <tr>
            <td style="background:linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);padding:28px 30px;border-bottom:1px solid #fee2e2;">
              <span style="display:inline-block;padding:4px 10px;background-color:#16a34a;color:#ffffff;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border-radius:20px;margin-bottom:8px;">
                ✓ Message Received
              </span>
              <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:800;line-height:1.3;">
                Thank You, ${data.fullName}!
              </h1>
              <p style="margin:8px 0 0 0;color:#475569;font-size:14px;line-height:1.6;">
                We have received your message. Our Manteca dispatch and service team is reviewing your request and will contact you promptly.
              </p>
            </td>
          </tr>

          <!-- SUMMARY DETAILS -->
          <tr>
            <td style="padding:24px 30px;">
              <h3 style="margin:0 0 12px 0;color:#0f172a;font-size:14px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">
                Your Submission Summary
              </h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:13px;background-color:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;padding:12px 16px;">
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;width:35%;">Phone:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;">Email:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;">Address:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.address}</td>
                </tr>
              </table>

              <!-- EMERGENCY ALERT BOX -->
              <div style="margin-top:20px;padding:16px;background-color:#fff1f2;border-radius:12px;border:1px solid #fecdd3;text-align:center;">
                <div style="color:#9f1239;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                  🚨 Need Immediate Roadside Dispatch?
                </div>
                <p style="margin:0 0 10px 0;color:#881337;font-size:12px;">
                  If you are currently stranded on Northern CA highways, call our live hotline directly:
                </p>
                <a href="tel:+12092398111" style="display:inline-block;padding:10px 20px;background-color:#dc2626;color:#ffffff;text-decoration:none;font-weight:800;font-size:13px;letter-spacing:1px;border-radius:8px;">
                  📞 (209) 239-8111
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0b1120;padding:20px 30px;text-align:center;color:#94a3b8;font-size:11px;line-height:1.6;border-top:1px solid #1e293b;">
              <strong style="color:#ffffff;">Imperial Truck & Trailer Repair | Wash</strong><br />
              2142 W Yosemite Ave, Manteca, CA 95337 &bull; CA-120 / I-5 Corridor<br />
              Mon–Fri: 8:00 AM – 6:00 PM | Sat: 8:00 AM – 5:00 PM | 24/7 Mobile Roadside
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

/**
 * Admin Notification Email for Estimate Form
 */
export const getAdminEstimateEmailHtml = (data: EstimateEmailPayload) => {
    const servicesBadges = data.selectedServices
        .map(
            (s) =>
                `<span style="display:inline-block;margin:3px 4px 3px 0;padding:4px 10px;background-color:#dc2626;color:#ffffff;font-size:11px;font-weight:700;border-radius:6px;">${s}</span>`
        )
        .join(' ');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Estimate Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid #e2e8f0;">
          
          <!-- HEADER WITH LOGO -->
          <tr>
            <td style="background-color:#0b1120;padding:24px 30px;text-align:center;border-bottom:4px solid #dc2626;">
              <img src="cid:companylogo" alt="Imperial Truck & Trailer Repair" style="max-height:54px;width:auto;display:inline-block;vertical-align:middle;" />
              <div style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:10px;">
                24/7 Roadside & Master Shop Facility
              </div>
            </td>
          </tr>

          <!-- TITLE BANNER -->
          <tr>
            <td style="background:linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);padding:24px 30px;border-bottom:1px solid #fee2e2;">
              <span style="display:inline-block;padding:4px 10px;background-color:#dc2626;color:#ffffff;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border-radius:20px;margin-bottom:8px;">
                Quote & Estimate Request
              </span>
              <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:800;line-height:1.3;">
                New Estimate Request Received
              </h1>
              <p style="margin:6px 0 0 0;color:#64748b;font-size:13px;">
                Received on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
              </p>
            </td>
          </tr>

          <!-- FORM DETAILS TABLE -->
          <tr>
            <td style="padding:28px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;width:35%;font-weight:600;">Full Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:700;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Phone Number</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <a href="tel:${data.phone}" style="color:#dc2626;font-weight:700;text-decoration:none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Email Address</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <a href="mailto:${data.email}" style="color:#dc2626;font-weight:700;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Address</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:600;">${data.address}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0 6px 0;color:#64748b;font-weight:600;" colspan="2">Selected Services:</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-bottom:12px;">
                    ${servicesBadges}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0 6px 0;color:#64748b;font-weight:600;" colspan="2">Repair Symptoms & Details:</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:12px 16px;background-color:#f8fafc;border-radius:10px;color:#334155;line-height:1.5;font-size:13px;border:1px solid #e2e8f0;">
                    ${data.description ? data.description.replace(/\n/g, '<br/>') : '<em>No extra details provided.</em>'}
                  </td>
                </tr>
              </table>

              <!-- QUICK ACTION BUTTONS -->
              <div style="margin-top:24px;text-align:center;">
                <a href="tel:${data.phone}" style="display:inline-block;padding:12px 24px;background-color:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;border-radius:10px;margin-right:8px;">
                  📞 Call Customer
                </a>
                <a href="mailto:${data.email}" style="display:inline-block;padding:12px 24px;background-color:#0f172a;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;border-radius:10px;">
                  ✉️ Send Estimate
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0b1120;padding:20px 30px;text-align:center;color:#94a3b8;font-size:11px;line-height:1.6;border-top:1px solid #1e293b;">
              <strong style="color:#ffffff;">Imperial Truck & Trailer Repair | Wash</strong><br />
              2142 W Yosemite Ave, Manteca, CA 95337 &bull; Phone: (209) 239-8111<br />
              <span style="color:#64748b;">This estimate request was submitted from your website.</span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

/**
 * Customer Confirmation Email for Estimate Form
 */
export const getCustomerEstimateEmailHtml = (data: EstimateEmailPayload) => {
    const servicesList = data.selectedServices
        .map((s) => `<li style="margin-bottom:4px;color:#0f172a;font-weight:600;">${s}</li>`)
        .join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estimate Request Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid #e2e8f0;">
          
          <!-- HEADER WITH LOGO -->
          <tr>
            <td style="background-color:#0b1120;padding:24px 30px;text-align:center;border-bottom:4px solid #dc2626;">
              <img src="cid:companylogo" alt="Imperial Truck & Trailer Repair" style="max-height:54px;width:auto;display:inline-block;vertical-align:middle;" />
              <div style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:10px;">
                24/7 Roadside & Master Shop Facility
              </div>
            </td>
          </tr>

          <!-- THANK YOU HERO -->
          <tr>
            <td style="background:linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);padding:28px 30px;border-bottom:1px solid #fee2e2;">
              <span style="display:inline-block;padding:4px 10px;background-color:#16a34a;color:#ffffff;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border-radius:20px;margin-bottom:8px;">
                ✓ Estimate Request Received
              </span>
              <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:800;line-height:1.3;">
                We're Reviewing Your Request, ${data.fullName}!
              </h1>
              <p style="margin:8px 0 0 0;color:#475569;font-size:14px;line-height:1.6;">
                Our master diesel technicians are reviewing your repair details and preparing a transparent, itemized quote.
              </p>
            </td>
          </tr>

          <!-- SUMMARY DETAILS -->
          <tr>
            <td style="padding:24px 30px;">
              <h3 style="margin:0 0 10px 0;color:#0f172a;font-size:14px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">
                Requested Services:
              </h3>
              <ul style="margin:0 0 18px 0;padding-left:20px;font-size:13px;line-height:1.5;">
                ${servicesList}
              </ul>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:13px;background-color:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;padding:12px 16px;">
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;width:35%;">Contact Phone:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;">Email:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#64748b;font-weight:600;">Address:</td>
                  <td style="padding:6px 0;color:#0f172a;font-weight:600;">${data.address}</td>
                </tr>
              </table>

              <!-- EMERGENCY ALERT BOX -->
              <div style="margin-top:20px;padding:16px;background-color:#fff1f2;border-radius:12px;border:1px solid #fecdd3;text-align:center;">
                <div style="color:#9f1239;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                  🚨 Urgent Breakdown or Roadside Triage?
                </div>
                <p style="margin:0 0 10px 0;color:#881337;font-size:12px;">
                  For immediate highway dispatch across CA-120 / I-5 / Hwy 99, call our 24/7 hotline:
                </p>
                <a href="tel:+12092398111" style="display:inline-block;padding:10px 20px;background-color:#dc2626;color:#ffffff;text-decoration:none;font-weight:800;font-size:13px;letter-spacing:1px;border-radius:8px;">
                  📞 (209) 239-8111
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0b1120;padding:20px 30px;text-align:center;color:#94a3b8;font-size:11px;line-height:1.6;border-top:1px solid #1e293b;">
              <strong style="color:#ffffff;">Imperial Truck & Trailer Repair | Wash</strong><br />
              2142 W Yosemite Ave, Manteca, CA 95337 &bull; 10-Bay Master Facility<br />
              Accepts Comdata, EFS, Fleet One, Wex, T-Chek, and All Major Cards
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
