import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightBlue.shade100),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'ALGORITMOS E TÉCNICAS DE PROGRAMAÇÃO'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController largura = TextEditingController();
  TextEditingController comprimento = TextEditingController();
  double area = 0;

  calcularArea(String l, String c) {
    double larg = double.tryParse(l) ?? 0;
    double compr = double.tryParse(c) ?? 0;

    setState(() {
      area = larg * compr;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Exercício 1',
              style: TextStyle(
                fontSize: 36,
                color: Colors.blueGrey.shade400,
                fontWeight: FontWeight.w700,
              ),
            ),
            SizedBox(
              height: 20,
              child: Center(
                child: Container(
                  color: Colors.amber,
                  child: const Text('LARGURA'),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                vertical: 8.0,
                horizontal: 180.0,
              ),
              child: TextFormField(
                controller: largura,
                keyboardType: TextInputType.number,
                style: TextStyle(
                  color: Colors.blue.shade900,
                  fontSize: 20,
                ),
                decoration: const InputDecoration(
                  labelText: "Digite a largura do lote: ",
                  labelStyle: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20,
              child: Center(
                child: Container(
                  color: Colors.amber,
                  child: const Text('COMPRIMENTO'),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                vertical: 8.0,
                horizontal: 180.0,
              ),
              child: TextFormField(
                controller: comprimento,
                keyboardType: TextInputType.number,
                style: TextStyle(
                  color: Colors.blue.shade900,
                  fontSize: 20,
                ),
                decoration: const InputDecoration(
                  labelText: "Digite o comprimento do lote: ",
                  labelStyle: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.symmetric(
                vertical: 8.0,
                horizontal: 250.0,
              ),
              child: SizedBox(
                height: 20,
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                vertical: 8.0,
                horizontal: 180.0,
              ),
              child: ElevatedButton(
                onPressed: calcularArea(largura.text, comprimento.text),
                child: Text(
                  'Calcular Área',
                  style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                      color: Colors.blueGrey.shade900),
                ),
              ),
            ),
            SizedBox(
              height: 35,
              child: Text(
                'Área do Terreno: ${area.toStringAsFixed(2)} metros quadrados',
                style: TextStyle(
                    fontSize: 32,
                    color: Colors.blueGrey.shade400,
                    fontWeight: FontWeight.w600),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
