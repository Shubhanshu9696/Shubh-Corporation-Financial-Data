document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Overview Chart
var overviewCtx = document.getElementById('overviewChart').getContext('2d');
var overviewChart = new Chart(overviewCtx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Revenue',
      data: [400000, 450000, 500000, 550000, 600000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }, {
      label: 'Expenses',
      data: [300000, 320000, 350000, 380000, 400000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, {
      label: 'Profit',
      data: [100000, 130000, 150000, 170000, 200000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Revenue Chart
var revenueCtx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(revenueCtx, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Revenue',
      data: [400000, 450000, 500000, 550000, 600000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Expenses Chart
var expensesCtx = document.getElementById('expensesChart').getContext('2d');
var expensesChart = new Chart(expensesCtx, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Expenses',
      data: [300000, 320000, 350000, 380000, 400000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Profit Chart
var profitCtx = document.getElementById('profitChart').getContext('2d');
var profitChart = new Chart(profitCtx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Profit',
      data: [100000, 130000, 150000, 170000, 200000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
