const { google } = require("googleapis");

export default async function (req: any, res: any) {
  const clientid = process.env.GOOGLE_CLIENT_ID;
  const clientsecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirecturl = "http://localhost:3000/api/auth/callback/google";
  const oauth2client = new google.auth.OAuth2(
    clientid,
    clientsecret,
    redirecturl
  );
  oauth2client.setCredentials({
    refresh_token: req.body.token,
  });
  const calendar = google.calendar("v3");
  const event = {
    summary: req.body.title,
    location: req.body.location,
    description: req.body.details,
    start: {
      dateTime: req.body.start_datetime,
    },
    end: {
      dateTime: req.body.end_datetime,
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  const response = await calendar.events.insert({
    auth: oauth2client,
    calendarId: "primary",
    requestBody: event,
  });
}
