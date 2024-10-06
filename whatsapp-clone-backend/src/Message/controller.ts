import express from "express";
import MessageService from "./service";
import puppeteer from "puppeteer";

class MessageController {
  static async sendMsg(request: express.Request, response: express.Response) {
    // console.log("hello", request.body);
    const result = await MessageService.sendMsg(request.body);

    if (result) {
      const payload = {
        status: true,
        data: result,
      };
      return response.status(200).json(payload);
    }

    return response.status(200).json({ status: false });
  }

  static async getMsg(request: express.Request, response: express.Response) {
    // console.log("hello", request.body);
    const result = await MessageService.getMsg(request.body);

    if (result) {
      const payload = {
        status: true,
        data: result,
      };
      return response.status(200).json(payload);
    }

    return response.status(200).json({ status: false });
  }

  static async getPdf(request: express.Request, response: express.Response) {
    // console.log("hello", request.body);
    (async function () {
      try {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        const content = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="x-ua-compatible" content="IE=edge">
            <!--Mobile Specific Meta Tag-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            
          <style type="text/css">
            table,th,td{
              border:0 solid black;
              font-family:Arial,Helvetica,sans-serif;
              color:#6a6f7a;
            }
          @media (max-width: 768px){
            .mailer_table{
              width:100% !important;
            }
        
        }	@media (max-width: 768px){
            .img_table td{
              width:50%;
            }
        
        }	@media (max-width: 768px){
            .img_table td img{
              width:100%;
            }
        
        }	@media (max-width: 768px){
            .header_image_right img{
              width:100% !important;
            }
        
        }	@media (max-width: 768px){
            .header_image_right{
              padding:15px 0 !important;
            }
        
        }	@media (max-width: 768px){
            .mobile_td{
              padding:30px 0 0 40px !important;
              font-size:24px !important;
            }
        
        }	@media (max-width: 768px){
            .mobile_text{
              width:auto !important;
            }
        
        }	@media (max-width: 768px){
            .mobile_footer_td{
              width:100% !important;
            }
        
        }</style></head>
          <body>
            <table align="center" border="0" cellpadding="0" class="mailer_table" cellspacing="0" width="600" style="height:100%;border:solid 1px #f2f6fb;">
              <tr>
                <td valign="top" id="bodyCell">
                  <!-- BEGIN TEMPLATE // -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td valign="top" id="templateHeader">
                        <table border="0" cellpadding="0" cellspacing="0" class="mcnCaptionRightContentOuter" width="100%" style="padding:5px 0px 0px 20px;background:#f2f6fb;border-top:solid 3px #397EFF;">
                          <tbody>
                            <tr>
                              <td valign="middle" width="50%" class="mcnCaptionRightContentInner" style="padding:5px 0px;">
                                <a href="#" target="_blank" style="color:#f2f6fb;">
                                  <img alt="" src="%CLIENT_LOGO%" width="140" style="max-width:140px;" class="mcnImage"></a>
                                </td>
                                <td valign="top" width="50%" class="header_image_right" style="text-align:right;padding-top:5px;">
                                  <img src="http://neurotags.blog.s3.amazonaws.com/blog/wp-content/uploads/2019/04/neurotags_mailer_header_image.png" alt="neurotags_mailer_header_image.png">
                                </td>
                                
                              </tr>
                            </tbody>
                          </table>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" id="templateBody">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding:40px 40px 15px 40px;font-family:sans-serif;font-size:14px;text-align:left;line-height:20px;color:#6a6f7a;">
                                        <div style="font-family:Arial, Helvetica, sans-serif;font-size:12px;">
                                                Hi %USER_NAME%, <br>
                                                Thank you for your request. We are going through the information that you have submitted and one of our representative will soon contact you. Please note the incident number for reference : <b>%INCIDENT_ID%</b>.
                                                <br>
                                                <br>
                                                If you need any urgent information or assistance, please feel free to call us on: %SUPPORT_NUMBER%
                                                <br>
                                                Or email us on: %SUPPORT_EMAIL%
                                                <br>
                                                <br>
                                                %ONBOARDING_TEXT%
                                                Sincerely,
                                                <br>
                                                %COMPANY_NAME% Support Team
                                                <br>
                                                %SUPPORT_EMAIL%
                                                <br><br>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                      <!-- // END TEMPLATE -->
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" id="templateFooter">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:20px;background:#f2f6fb;">
                        <tbody>
                            <tr>
                            <td valign="top" class="mcnTextContent" style="padding-top:0;padding-right:18px;padding-bottom:0px;padding-left:18px;font-family:Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:12px;background:#f2f6fb;padding:40px;text-align:left;color:#6a6f7a;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 20px 0;border-bottom:solid 1px #eee;">
                                <tbody>
                                    <tr>
                                        <td width="60%" align="right" valign="top" style="text-align:right;padding:0 0 20px 0;">
                                        %COMPANY_ADDRESS%
                                        <br> %CITY%, %STATE%, %ZIP%
                                        <br>
                                        <br> Contact No : %SUPPORT_NUMBER%
                                        <br> Email : <a href="mailto:%SUPPORT_EMAIL%" target="_blank" style="color:#0094de;text-decoration:none;">%SUPPORT_EMAIL%</a>
                                        <br> Website : <a href="%COMPANY_WEBSITE_LINK%" target="_blank" style="color:#0094de;text-decoration:none;">%COMPANY_WEBSITE_LINK%</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                
          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 0px 0;">
              <tbody>
              <tr>
                  <td width="50%" style="text-align:right;">
                  <span style="color:#6a6f7a;text-decoration:none;text-align:right;padding-right:3px;"> Powered by  </span>
                  </td>
                  <td style="padding-left:5px;">
                  <span  style="color:#6a6f7a;text-decoration:none;"><img src="https://www.neurotags.com/img/neurotags/logo.png" align="middle" width="100" alt="logo.png"></span>
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
                </table>
              </body>
        </html>`;

        await page.setContent(content);

        const result = await page.pdf({
          // path: "output.pdf",
          format: "A4",
          printBackground: true,
        });

        console.log("done", result);
        const payload = {
          status: true,
          data: result,
        };
        await browser.close();
        // response.set({ 'Content-Type': 'application/pdf', 'Content-Length': result.length })
        // return response.type('application/pdf').status(200).json(result);
        // process.exit();
        return result;
      } catch (e) {
        console.log(e);
      }
    })().then((pdf) => {
      if (pdf !== undefined) {
        response.set({
          "Content-Type": "application/pdf",
          "Content-Length": pdf.length,
        });
        response.send(pdf);
      }
    });

    // const result = await MessageService.getPdf(request.body);
    console.log("a");
    // if (result) {
    //   const payload = {
    //     status: true,
    //     data: result
    //   };
    //   return response.status(200).json(payload);
    // }

    // return response.status(200).json({ status: false });
  }
}

export default MessageController;
