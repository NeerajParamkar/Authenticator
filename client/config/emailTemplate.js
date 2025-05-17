export const WELLCOME_TEMPLATE =`
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Welcome Email</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: linear-gradient(120deg, #f0f4f8, #d9eaf7);
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header-bar {
      background: linear-gradient(to right, #4C83EE, #22D172);
      padding: 16px;
      color: white;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }

    .main-content {
      padding: 32px 30px 30px;
      color: #000000;
    }

    .highlight-box {
      background-color: #f4fef8;
      padding: 16px;
      border-left: 4px solid #22D172;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1.5;
      margin-top: 16px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 90% !important;
      }

      .header-bar {
        font-size: 18px;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="header-bar">
                  🎉 Welcome to Our Website!
                </td>
              </tr>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 16px; font-weight: bold; padding-bottom: 10px;">
                          Your account has been created!
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 14px; line-height: 150%;">
                          We've successfully created your account using the email ID:
                          <span style="color: #4C83EE; font-weight: 600;">{{email}}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="highlight-box">
                          Thank you for joining us — we’re excited to have you as part of our community! Let’s make something amazing together.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; font-size: 12px; color: #888;">
                          If you didn’t create this account, please ignore this email.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

`

export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Email Verify</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: linear-gradient(120deg, #f0f4f8, #d9eaf7);
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header-bar {
      background: linear-gradient(to right, #4C83EE, #22D172);
      padding: 16px;
      color: white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .main-content {
      padding: 40px 30px;
      color: #000000;
    }

    .otp-box {
      display: inline-block;
      padding: 12px 24px;
      background: #22D172;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 30px;
      text-align: center;
      margin: 20px 0;
      letter-spacing: 2px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 90% !important;
      }

      .header-bar {
        font-size: 18px;
      }

      .otp-box {
        font-size: 16px;
        padding: 10px 20px;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="header-bar">
                  🔐 Email Verification
                </td>
              </tr>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding-bottom: 18px; font-size: 16px; font-weight: bold;">
                          Verify your email address
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 14px; line-height: 1.6;">
                          You're just one step away from verifying your account with this email:
                          <span style="color: #4C83EE; font-weight: 600;">{{email}}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; font-size: 14px; font-weight: 600;">
                          Use the OTP below to verify your account:
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <div class="otp-box">{{otp}}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; color: #555;">
                          This OTP is valid for 5 minutes. Please do not share it with anyone.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; font-size: 12px; color: #888;">
                          Didn’t request this email? You can safely ignore it.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

`

export const PASSWORD_RESET_TEMPLATE = `

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: linear-gradient(120deg, #f0f4f8, #d9eaf7);
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header-bar {
      background: linear-gradient(to right, #4C83EE, #22D172);
      padding: 16px;
      color: white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .main-content {
      padding: 40px 30px;
      color: #000000;
    }

    .otp-box {
      display: inline-block;
      padding: 12px 24px;
      background: #22D172;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 30px;
      text-align: center;
      margin: 20px 0;
      letter-spacing: 2px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 90% !important;
      }

      .header-bar {
        font-size: 18px;
      }

      .otp-box {
        font-size: 16px;
        padding: 10px 20px;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="header-bar">
                  🔒 Password Reset Request
                </td>
              </tr>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding-bottom: 18px; font-size: 16px; font-weight: bold;">
                          Forgot your password?
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 14px; line-height: 1.6;">
                          We received a password reset request for your account associated with:
                          <span style="color: #4C83EE; font-weight: 600;">{{email}}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; font-size: 14px; font-weight: 600;">
                          Use the OTP below to reset your password:
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <div class="otp-box">{{otp}}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; color: #555;">
                          This OTP is valid for the next 5 minutes. Please do not share it with anyone.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; font-size: 12px; color: #888;">
                          Didn't request a password reset? Please ignore this message or contact support.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

`

