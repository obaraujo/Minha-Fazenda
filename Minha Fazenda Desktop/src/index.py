#!/usr/bin/python3

from tkinter import *
from tkinter import ttk
from tkcalendar import DateEntry
from datetime import datetime


class Animal:
    def __init__(self, nome, pai, mae, dataNascimento, sexo, tipo, raca):
        self.nomeDoAnimal = nome
        self.paiDoAnimal = pai
        self.maeDoAnimal = mae
        self.dataDeNascimento = dataNascimento
        self.sexo = sexo
        self.tipoDoAnimal = tipo
        self.racaDoAnimal = raca


class Plantacao:
    def __init__(self, nome, dataPlantio, cultura, tamanho, propriedade):
        self.nomeDaRoca = nome
        self.dataDoPlantio = dataPlantio
        self.cultura = cultura
        self.tamanho = tamanho
        self.propriedadePertecente = propriedade


class Propriedade:
    def __init__(self, nome, tamanho):
        self.nomeDaPropriedade = nome
        self.tamanho = tamanho


class App:
    def __init__(self, window):
        self.dataDeHoje = datetime.now()

        self.corDeFundo = "#FFF"
        self.corDeFonteLabel = "#333"
        self.corDeSelecaoFonte = "#ffeeff"
        self.corDeSelecao = "#fe4500"
        self.corDeEntry = "#000"
        self.corBordaEntry = "#343434"
        self.corBordaEntryA = "#9999ff"
        self.larguraDoCampo = 50
        self.alturaDoCampo = 1


    def telaInicial(self):
        self.menuBar = Menu(window)
        self.menuBar.configure(bg="#FFF", relief="flat", bd=0, cursor="hand2")
        window.config(menu=self.menuBar)

        self.imagem = PhotoImage("/../data/images/carregarIMG.png")
        Label(window, text="YY \n\n\n", image=self.imagem).place(x=0, y=100)

        self.menuCadastro = Menu(self.menuBar)
        self.menuBar.add_cascade(label="Cadastro", menu=self.menuCadastro)
        self.menuCadastro.add_command(hidemargin=20, label="Cadastrar animal", command=self.cadastrarAnimal)
        self.menuCadastro.add_command(label="Cadastrar plantação", command=self.cadastrarPlantacao)
        self.menuCadastro.add_command(label="Consultar", command=self.consultar)
        self.menuCadastro.configure(tearoff=0)

        self.menuConsulta = Menu(self.menuBar)
        self.menuConsulta.configure(bg="#eee")

        self.menuEdicao = Menu(self.menuBar)
        self.menuEdicao.configure(bg="#eee", relief="flat" )

        self.menuBar.add_cascade(label="Consultar", menu=self.menuConsulta)
        self.menuBar.add_cascade(label="Editar", menu=self.menuEdicao)
        


    def validarPreenchimento(self, campo, desabilitarCampo, msg):
        if desabilitarCampo == "null":
            if campo.get() == "":
                campo["highlightbackground"] = "red"
                msg["fg"] = "red"
                return False
            else:
                campo["highlightbackground"] = self.corBordaEntry
                msg["fg"] = self.corDeFundo
                return True
        else:
            if campo.get() == "" and desabilitarCampo["offvalue"] == "sei":
                campo["highlightbackground"] = "red"
                msg["fg"] = "red"
                return False
            else:
                campo["highlightbackground"] = self.corBordaEntry
                msg["fg"] = self.corDeFundo
                return True


    def desabilitarCampo(self, botao, campo, msg=None):
        if botao["onvalue"] == "naosei":
            if msg != None:
                msg["fg"] = self.corDeFundo            
            campo["state"] = "disabled"
            botao["onvalue"] = "sei"
            botao["offvalue"] = "naosei"        
            botao["selectcolor"] = "red"

        else:
            campo["state"] = "normal"
            botao["onvalue"] = "naosei"
            botao["offvalue"] = "sei"
            botao["selectcolor"] = self.corDeFundo


    def selecaoDeRaca(self, event):
        print(self.tipoEntrada.get())
        if self.tipoEntrada.get() == "Bovino":
            self.racaEntrada["state"] = "readonly"
            self.racaEntrada["values"] = ["Escolha a raça", "Nelore", "Girolando", "Japonesa Negra"]
            self.racaEntrada.current(0)
        elif self.tipoEntrada.get() == "Ovino":
            self.racaEntrada["state"] = "readonly"
            self.racaEntrada["values"] = ["Escolha a raça", "Dorper", "Merino"]
            self.racaEntrada.current(0)
        elif self.tipoEntrada.get() == "Equino":
            self.racaEntrada["state"] = "readonly"
            self.racaEntrada["values"] = ["Escolha a raça", "Manga Larga", "Mustangue", "Quarto de milha"]
            self.racaEntrada.current(0)
        elif self.tipoEntrada.get() == "Escolha o tipo":
            self.racaEntrada["values"] = ["Escolha a raça"]
            self.racaEntrada["state"] = "disabled"


    def cadastrarAnimal(self):
        self.windowCadastro = Toplevel(window)
        self.windowCadastro.title("Cadastro - Minha Fazenda")
        self.windowCadastro.config(bg=self.corDeFundo)
 
        self.windowCadastro.geometry("560x500")

        self.tituloLabel = Label(self.windowCadastro)
        self.tituloLabel.configure(text="Fazenda Saquinho", bg="red")
        self.tituloLabel.grid(row=0, column=0, columnspan=10, sticky=W+E)

        Label(self.windowCadastro, text="", bg=self.corDeFundo, width=3).grid(row=60, column=0, rowspan=60)

        Label(self.windowCadastro, text="Texto").grid(row=0, column=5, padx=10, pady=10)

        self.nomeLabel = Label(self.windowCadastro)
        self.nomeLabel.configure(text="Nome:", bg=self.corDeFundo, fg=self.corDeFonteLabel, height=self.alturaDoCampo)
        self.nomeLabel.grid(row=5, column=1, sticky=W)

        self.msgNome = Label(self.windowCadastro)
        self.msgNome.configure(text="Preencha com o nome", fg=self.corDeFundo, bg=self.corDeFundo, font=("Arial", 10))
        self.msgNome.grid(row=5, column=2, sticky=W)

        self.nomeEntrada = Entry(self.windowCadastro)
        self.nomeEntrada.configure(font=('Ubuntu', 12), bg=self.corDeFundo, selectbackground=self.corDeSelecao, selectforeground=self.corDeSelecaoFonte, highlightcolor=self.corBordaEntryA, highlightthickness=2, highlightbackground=self.corBordaEntry, width=self.larguraDoCampo, borderwidth=2, cursor="hand2", insertbackground="#eee", insertborderwidth=3, insertwidth=3, relief="flat", state="normal", takefocus=True, validate="focusout", validatecommand=lambda: self.validarPreenchimento(self.nomeEntrada, "null", self.msgNome))
        self.nomeEntrada.grid(row=6, column=1, sticky=N+S+W+E, columnspan=10)

        self.nomePaiLabel = Label(self.windowCadastro)
        self.nomePaiLabel.configure(text="Nome do pai:", bg=self.corDeFundo, fg=self.corDeFonteLabel, height=self.alturaDoCampo, pady=3)
        self.nomePaiLabel.grid(row=11, column=1, sticky=W)

        self.msgPai = Label(self.windowCadastro)
        self.msgPai.configure(text="Preencha com o nome do Pai", fg=self.corDeFundo, bg=self.corDeFundo, font=("Arial", 10))
        self.msgPai.grid(row=11, column=2, sticky=W)

        self.nomePaiEntrada = Entry(self.windowCadastro)
        self.nomePaiEntrada.configure(font=('Ubuntu', 12), bg=self.corDeFundo, selectbackground=self.corDeSelecao, selectforeground=self.corDeSelecaoFonte, highlightcolor=self.corBordaEntryA, highlightthickness=2, highlightbackground=self.corBordaEntry, width=self.larguraDoCampo, borderwidth=2, cursor="hand2", insertbackground="#eee", insertborderwidth=3, insertwidth=3, relief="flat", state="normal", takefocus=True, validate="focusout", validatecommand=lambda: self.validarPreenchimento(self.nomePaiEntrada, self.naoTemPai, self.msgPai))
        self.nomePaiEntrada.grid(row=12, column=1, sticky=N+S+W+E, columnspan=10)

        self.naoTemPai = Checkbutton(self.windowCadastro)
        self.naoTemPai.configure(text="Não sei", relief="flat", onvalue="naosei", offvalue="sei", command=lambda: self.desabilitarCampo(self.naoTemPai, self.nomePaiEntrada, self.msgPai),bg=self.corDeFundo,highlightbackground=self.corDeFundo,cursor="hand2",activebackground=self.corDeFundo)
        self.naoTemPai.grid(row=13, column=3)

        self.nomeMaeLabel = Label(self.windowCadastro)
        self.nomeMaeLabel.configure(text="Nome da mãe:", bg=self.corDeFundo, fg=self.corDeFonteLabel, height=self.alturaDoCampo, pady=3)
        self.nomeMaeLabel.grid(row=18, column=1, sticky=W)

        self.msgMae = Label(self.windowCadastro)
        self.msgMae.configure(text="Preencha com o nome da mãe", fg=self.corDeFundo, bg=self.corDeFundo, font=("Arial", 10))
        self.msgMae.grid(row=18, column=2, sticky=W)

        self.nomeMaeEntrada = Entry(self.windowCadastro)
        self.nomeMaeEntrada.configure(font=('Ubuntu', 12), bg=self.corDeFundo, selectbackground=self.corDeSelecao, selectforeground=self.corDeSelecaoFonte, highlightcolor=self.corBordaEntryA, highlightthickness=2, highlightbackground=self.corBordaEntry, width=self.larguraDoCampo, borderwidth=2, cursor="hand2", insertbackground="#eee", insertborderwidth=3, insertwidth=3, relief="flat", state="normal", takefocus=True, validate="focusout", validatecommand=lambda: self.validarPreenchimento(self.nomeMaeEntrada, self.naoTemMae, self.msgMae))
        self.nomeMaeEntrada.grid(row=19, column=1, sticky=N+S+W+E, columnspan=10)

        self.naoTemMae = Checkbutton(self.windowCadastro)
        self.naoTemMae.configure(text="Não sei", relief="flat", onvalue="naosei", offvalue="sei", command=lambda: self.desabilitarCampo(self.naoTemMae, self.nomeMaeEntrada, self.msgMae), bg=self.corDeFundo, highlightbackground=self.corDeFundo, cursor="hand2", activebackground=self.corDeFundo)
        self.naoTemMae.grid(row=20, column=3)

        self.dataDeNascimentoLabel = Label(self.windowCadastro)
        self.dataDeNascimentoLabel.configure(text="Data de nascimento", bg=self.corDeFundo, fg=self.corDeFonteLabel, height=self.alturaDoCampo, pady=3)
        self.dataDeNascimentoLabel.grid(row=25, column=1, sticky=W, columnspan=2)
        
        self.dataDeNascimentoEntrada = DateEntry(self.windowCadastro, width=12, background='#333', foreground='white', borderwidth=2, year=self.dataDeHoje.year, month=self.dataDeHoje.month, day=self.dataDeHoje.day)
        self.dataDeNascimentoEntrada.grid(row=26, column=1, sticky=W+E)

        self.naoSeiDN= Checkbutton(self.windowCadastro)
        self.naoSeiDN.configure(text="Não sei", relief="flat", onvalue="naosei", offvalue="sei", command=lambda: self.desabilitarCampo(self.naoSeiDN, self.dataDeNascimentoEntrada), bg=self.corDeFundo, highlightbackground=self.corDeFundo, cursor="hand2", activebackground=self.corDeFundo)
        self.naoSeiDN.grid(row=26, column=2)

        Label(self.windowCadastro, width=1, bg=self.corDeFundo).grid(row=8, column=2)

        self.sexoLabel = Label(self.windowCadastro)
        self.sexoLabel.configure(text="Sexo", bg=self.corDeFundo, fg=self.corDeFonteLabel)
        self.sexoLabel.grid(row=31, column=1, sticky=W)

        self.sexoMacho = Radiobutton(self.windowCadastro)
        self.sexoMacho.configure(text="Macho", value="macho", bg=self.corDeFundo, cursor="hand2", highlightbackground=self.corDeFundo, fg=self.corDeEntry)
        self.sexoMacho.grid(row=32, column=1, sticky=W+E, columnspan=1)

        self.sexoFemea = Radiobutton(self.windowCadastro,)
        self.sexoFemea.configure(text="Fêmea", value="femea", bg=self.corDeFundo, cursor="hand2", highlightbackground=self.corDeFundo, fg=self.corDeEntry)
        self.sexoFemea.grid(row=32, column=2, sticky=W+E, columnspan=1)

        self.tipoLabel = Label(self.windowCadastro)
        self.tipoLabel.configure(text="Tipo", bg=self.corDeFundo, fg=self.corDeFonteLabel)
        self.tipoLabel.grid(row=37, column=1, sticky=W)

        self.tipoValores = ["Escolha o tipo", "Bovino", "Ovino", "Equino"]

        self.tipoEntrada = ttk.Combobox(self.windowCadastro)
        self.tipoEntrada.configure(cursor="hand2", values=self.tipoValores, state="readonly")
        self.tipoEntrada.current(0)
        self.tipoEntrada.grid(row=38, column=1)

        self.racaLabel = Label(self.windowCadastro)
        self.racaLabel.configure(text="  Raça", bg=self.corDeFundo, fg=self.corDeFonteLabel)
        self.racaLabel.grid(row=37, column=2, sticky=W)

        self.racaEntrada = ttk.Combobox(self.windowCadastro)
        self.racaEntrada.configure(cursor="hand2", values=["Escolha a raça"], state="disabled")
        self.racaEntrada.current(0)
        self.racaEntrada.grid(row=38, column=2)

        self.tipoEntrada.bind("<<ComboboxSelected>>", self.selecaoDeRaca)

        Label(self.windowCadastro, height=1, bg=self.corDeFundo).grid(row=49, column=1)

        self.botaoConfirmar = Button(self.windowCadastro)
        self.botaoConfirmar.configure(text="Confirmar", bg=self.corDeFundo, highlightbackground="#00cf00", activebackground="#00cf00", font=("Arial", 12, "bold"), fg="#00cf00", activeforeground="#fff", relief="flat", cursor="hand2")
        self.botaoConfirmar.grid(row=50, column=3, sticky=W+E)

        self.botaoCancelar = Button(self.windowCadastro)
        self.botaoCancelar.configure(text="Cancelar", bg=self.corDeFundo, highlightbackground="#cf0000", activebackground="#cf0000", font=("Arial", 12, "bold"), fg="#cf0000", activeforeground="#fff", relief="flat", cursor="hand2", command=self.windowCadastro.destroy)
        self.botaoCancelar.grid(row=50, column=2, sticky=W+E)


    def cadastrarPlantacao(self):
        pass


    def consultar(self):
        pass


window = Tk()

window.title("Minha Fazenda")
window["bg"] = "#333"
window.geometry("600x400")
window.resizable(0,0)

app = App(window)
app.telaInicial()

window.mainloop()
    