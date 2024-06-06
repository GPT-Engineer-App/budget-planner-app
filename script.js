document.addEventListener("DOMContentLoaded", function () {
  // Funções para carregar dados e gráficos
  loadUserData();
  loadGastos();
  loadEconomias();
  loadInvestimentos();
});

function loadUserData() {
  // Carregar dados do usuário
  document.getElementById("userName").innerText = "Usuário";
}

function loadGastos() {
  // Carregar dados de gastos e renderizar gráfico
  const ctx = document.getElementById("gastosChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Gastos",
          data: [120, 150, 180, 200, 170],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    },
  });
}

function loadEconomias() {
  // Carregar dados de economias e renderizar gráfico
  const ctx = document.getElementById("economiasChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Economias",
          data: [50, 70, 90, 110, 130],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
        },
      ],
    },
  });
}

function loadInvestimentos() {
  // Carregar dados de investimentos e renderizar gráfico
  const ctx = document.getElementById("investimentosChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Investimentos",
          data: [200, 220, 240, 260, 280],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
  });
}

function addGasto() {
  // Função para adicionar novo gasto
  alert("Adicionar novo gasto");
}

function addEconomia() {
  // Função para adicionar nova economia
  alert("Adicionar nova economia");
}

function addInvestimento() {
  // Função para adicionar novo investimento
  alert("Adicionar novo investimento");
}
