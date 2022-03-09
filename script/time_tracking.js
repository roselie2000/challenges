let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

  let daily = document.getElementById("daily");
  let weekly = document.getElementById("weekly");
  let monthly = document.getElementById("monthly");

  daily.addEventListener('click', dailyFunc);
  monthly.addEventListener('click', monthlyFunc);
  weekly.addEventListener('click', weeklyFunc);
  window.onload = weeklyFunc();
  function dailyFunc(){
    daily.classList.add('active');
    monthly.classList.remove('active');
    weekly.classList.remove('active');
    document.getElementById("w_hours").innerHTML = `${data[0].timeframes.daily.current + 'hrs'}`;
    document.getElementById("w_prev").innerHTML =  `${data[0].timeframes.daily.previous + 'hrs'}`;

    document.getElementById("p_hours").innerHTML = `${data[1].timeframes.daily.current + 'hrs'}`;
    document.getElementById("p_prev").innerHTML =  `${data[1].timeframes.daily.previous + 'hrs'}`;

    document.getElementById("s_hours").innerHTML = `${data[2].timeframes.daily.current + 'hrs'}`;
    document.getElementById("s_prev").innerHTML =  `${data[2].timeframes.daily.previous + 'hrs'}`;

    document.getElementById("e_hours").innerHTML = `${data[3].timeframes.daily.current + 'hrs'}`;
    document.getElementById("e_prev").innerHTML =  `${data[3].timeframes.daily.previous + 'hrs'}`;

    document.getElementById("so_hours").innerHTML = `${data[4].timeframes.daily.current + 'hrs'}`;
    document.getElementById("so_prev").innerHTML =  `${data[4].timeframes.daily.previous + 'hrs'}`;

    document.getElementById("sc_hours").innerHTML = `${data[5].timeframes.daily.current + 'hrs'}`;
    document.getElementById("sc_prev").innerHTML =  `${data[5].timeframes.daily.previous + 'hrs'}`;

  }

function weeklyFunc(){
    daily.classList.remove('active');
    monthly.classList.remove('active');
    weekly.classList.add('active');
    document.getElementById("w_hours").innerHTML = `${data[0].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("w_prev").innerHTML =  `${data[0].timeframes.weekly.previous + 'hrs'}`;

    document.getElementById("p_hours").innerHTML = `${data[1].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("p_prev").innerHTML =  `${data[1].timeframes.weekly.previous + 'hrs'}`;

    document.getElementById("s_hours").innerHTML = `${data[2].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("s_prev").innerHTML =  `${data[2].timeframes.weekly.previous + 'hrs'}`;

    document.getElementById("e_hours").innerHTML = `${data[3].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("e_prev").innerHTML =  `${data[3].timeframes.weekly.previous + 'hrs'}`;

    document.getElementById("so_hours").innerHTML = `${data[4].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("so_prev").innerHTML =  `${data[4].timeframes.weekly.previous + 'hrs'}`;

    document.getElementById("sc_hours").innerHTML = `${data[5].timeframes.weekly.current + 'hrs'}`;
    document.getElementById("sc_prev").innerHTML =  `${data[5].timeframes.weekly.previous + 'hrs'}`;
    
}

  function monthlyFunc(){
    daily.classList.remove('active');
    monthly.classList.add('active');
    weekly.classList.remove('active');
    document.getElementById("w_hours").innerHTML = `${data[0].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("w_prev").innerHTML =  `${data[0].timeframes.monthly.previous + 'hrs'}`;

    document.getElementById("p_hours").innerHTML = `${data[1].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("p_prev").innerHTML =  `${data[1].timeframes.monthly.previous + 'hrs'}`;

    document.getElementById("s_hours").innerHTML = `${data[2].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("s_prev").innerHTML =  `${data[2].timeframes.monthly.previous + 'hrs'}`;

    document.getElementById("e_hours").innerHTML = `${data[3].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("e_prev").innerHTML =  `${data[3].timeframes.monthly.previous + 'hrs'}`;

    document.getElementById("so_hours").innerHTML = `${data[4].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("so_prev").innerHTML =  `${data[4].timeframes.monthly.previous + 'hrs'}`;

    document.getElementById("sc_hours").innerHTML = `${data[5].timeframes.monthly.current + 'hrs'}`;
    document.getElementById("sc_prev").innerHTML =  `${data[5].timeframes.monthly.previous + 'hrs'}`;
  }
