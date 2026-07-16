from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)
app.secret_key = "survival"

@app.route('/')
def inicio():
    return render_template(
        "index.html",
        reglas=session.get("reglas"),
        notas=session.get("notas"),
        skills=session.get("skills"),
        tiempo=session.get("tiempo")
    )

@app.route('/reglas', methods=['GET', 'POST'])
def reglas():

    mensaje = ""

    if request.method == 'POST':

        r1 = request.form['respuesta1'] if request.form.get('respuesta1') else ""
        r2 = request.form['respuesta2'] if request.form.get('respuesta2') else ""
        check = request.form.get("check")

        if not r1:
            mensaje = "falta respuesta 1"

        elif not r2:
            mensaje = "falta respuesta 2"

        elif not check:
            mensaje = "falta aceptar el check"

        elif r1 != "80%":
            mensaje = "respuesta 1 incorrecta"

        elif r2 != "respeto":
            mensaje = "respuesta 2 incorrecta"

        else:
            session["reglas"] = True
            mensaje = "felicidades, nivel completado"

    return render_template("reglas.html", mensaje=mensaje)


@app.route('/notas', methods=['GET', 'POST'])
def notas():

    if not session.get("reglas"):
        return redirect('/')

    mensaje = ""

    if request.method == 'POST':

        r1 = request.form['respuesta1'] if request.form.get('respuesta1') else ""
        r2 = request.form['respuesta2'] if request.form.get('respuesta2') else ""
        check = request.form.get("check")

        if not r1:
            mensaje = "falta respuesta 1"

        elif not r2:
            mensaje = "falta respuesta 2"

        elif not check:
            mensaje = "falta aceptar el check"

        elif r1 != "30%":
            mensaje = "respuesta 1 incorrecta"

        elif r2 != "preguntar":
            mensaje = "respuesta 2 incorrecta"

        else:
            session["notas"] = True
            mensaje = "felicidades, nivel completado"

    return render_template("notas.html", mensaje=mensaje)


@app.route('/skills', methods=['GET', 'POST'])
def skills():

    if not session.get("notas"):
        return redirect('/')

    mensaje = ""

    if request.method == 'POST':

        r1 = request.form['respuesta1'].lower() if request.form.get('respuesta1') else ""
        r2 = request.form['respuesta2'].lower() if request.form.get('respuesta2') else ""
        check = request.form.get("check")

        if not r1:
            mensaje = "falta respuesta 1"

        elif not r2:
            mensaje = "falta respuesta 2"

        elif not check:
            mensaje = "falta aceptar el check"

        elif r1 != "react native":
            mensaje = "respuesta 1 incorrecta"

        elif r2 != "javascript":
            mensaje = "respuesta 2 incorrecta"

        else:
            session["skills"] = True
            mensaje = "felicidades, nivel completado"

    return render_template("skills.html", mensaje=mensaje)


@app.route('/tiempo', methods=['GET', 'POST'])
def tiempo():

    if not session.get("skills"):
        return redirect('/')

    mensaje = ""

    if request.method == 'POST':

        r1 = request.form['respuesta1'] if request.form.get('respuesta1') else ""
        r2 = request.form['respuesta2'] if request.form.get('respuesta2') else ""
        check = request.form.get("check")

        if not r1:
            mensaje = "falta respuesta 1"

        elif not r2:
            mensaje = "falta respuesta 2"

        elif not check:
            mensaje = "falta aceptar el check"

        elif r1 != "01-06-26":
            mensaje = "fecha del primer parcial incorrecta"

        elif r2 != "17-08-26":
            mensaje = "fecha del final incorrecta"

        else:
            session["tiempo"] = True
            mensaje = "felicidades, sobreviviste al reto"

    return render_template("tiempo.html", mensaje=mensaje)


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)