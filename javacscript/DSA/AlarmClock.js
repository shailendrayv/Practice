// write a program that creates a basic alarm Clock.

function Alarm(h, m) {
  const now = new Date();
  const AlarmDate = new Date();

  AlarmDate.setHours(h);
  AlarmDate.setMinutes(m);

  const time = AlarmDate - now;

  if (time < 0) {
    console.log("Please provide a future time");
    return;
  }

  setTimeout(() => {
    console.log("⏰ Alarm is ringing!");
  }, time);

  console.log(now,AlarmDate,time);
}

Alarm(3, 8); 

