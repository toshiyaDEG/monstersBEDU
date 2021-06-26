// Project code...
        //Insertando puertas en grid
		let grid = document.querySelector('#app')
		function build() {
			for (let i = 0; i < 12; i++) {
				let door = document.createElement('img');
				door.setAttribute('src', './door.svg');
				door.setAttribute('id', 'm'+ i);
				grid.appendChild(door)
			}
		}
        build()
        const kaijus = document.querySelectorAll('img')

        kaijus.forEach(kaiju => {
            kaiju.addEventListener('click', knockDoor)
        })

        //Número random
        function getRandomInt(min, max) {
            let num = Math.floor(Math.random() * (max - min)) + min
            return num
        }
        function knockDoor() {
            let num = getRandomInt(0,12)
            //let mm = getrandomMonster (num, monsters)

            if (num < 11) {
                let monId = this.getAttribute('data-id')
                this.setAttribute('src', monsters[num])
            } else {
                window.location.href = "./sock.html";
            }
        }


        //Monster random
        function getrandomMonster(num, monsters) {
            let e = monsters[num]
            return e
        }
		// The monsters and socks
		var monsters = [
			'monster1.svg',
			'monster2.svg',
			'monster3.svg',
			'monster4.svg',
			'monster5.svg',
			'monster6.svg',
			'monster7.svg',
			'monster8.svg',
			'monster9.svg',
			'monster10.svg',
			'monster11.svg',
            'sock!'
		];