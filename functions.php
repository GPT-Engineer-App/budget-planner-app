<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['nomeCompleto']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmPassword'])) {
        // Cadastro de usuário
        $nomeCompleto = $_POST['nomeCompleto'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];

        if ($password == $confirmPassword) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO usuario (nomeCompleto, email, senha) VALUES ('$nomeCompleto', '$email', '$hashedPassword')";
            if ($conn->query($sql) === TRUE) {
                echo "Cadastro realizado com sucesso!";
            } else {
                echo "Erro: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "As senhas não coincidem!";
        }
    } elseif (isset($_POST['email']) && isset($_POST['password'])) {
        // Login de usuário
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM usuario WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['senha'])) {
                echo "Login realizado com sucesso!";
                // Redirecionar para a página principal
                header("Location: main.html");
            } else {
                echo "Senha incorreta!";
            }
        } else {
            echo "Usuário não encontrado!";
        }
    }
}

$conn->close();
?>