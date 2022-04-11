let input = document.getElementById('input-field');

window.addEventListener('keydown', function (key) {
    let oKey = event.key;
    if (event.keyCode == 192) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key1').style.backgroundColor = 'gray';
        document.getElementById('key1').style.color = 'white';
    }
    else if (event.keyCode === 49) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key2').style.backgroundColor = 'gray';
        document.getElementById('key2').style.color = 'white';
    }
    else if (event.keyCode === 50) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key3').style.backgroundColor = 'gray';
        document.getElementById('key3').style.color = 'white';
    }
    else if (event.keyCode === 51) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key4').style.backgroundColor = 'gray';
        document.getElementById('key4').style.color = 'white';
    }
    else if (event.keyCode === 52) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key5').style.backgroundColor = 'gray';
        document.getElementById('key5').style.color = 'white';
    }
    else if (event.keyCode === 53) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key6').style.backgroundColor = 'gray';
        document.getElementById('key6').style.color = 'white';
    }
    else if (event.keyCode === 54) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key7').style.backgroundColor = 'gray';
        document.getElementById('key7').style.color = 'white';
    }
    else if (event.keyCode === 55) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key8').style.backgroundColor = 'gray';
        document.getElementById('key8').style.color = 'white';
    }
    else if (event.keyCode === 56) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key9').style.backgroundColor = 'gray';
        document.getElementById('key9').style.color = 'white';
    }
    else if (event.keyCode === 57) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key10').style.backgroundColor = 'gray';
        document.getElementById('key10').style.color = 'white';
    }
    else if (event.keyCode === 48) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key11').style.backgroundColor = 'gray';
        document.getElementById('key11').style.color = 'white';
    }
    else if (event.keyCode === 189) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key12').style.backgroundColor = 'gray';
        document.getElementById('key12').style.color = 'white';
    }
    else if (event.keyCode === 187) {


        document.getElementById('key13').style.backgroundColor = 'gray';
        document.getElementById('key13').style.color = 'white';


    }
    else if (event.keyCode === 8) {

        input.innerHTML = input.textContent.slice(0, -1);

        document.getElementById('key14').style.backgroundColor = 'gray';
        document.getElementById('key14').style.color = 'white';
    }
    else if (event.keyCode === 9) {
        input.innerHTML += '    ';
        document.getElementById('key15').style.backgroundColor = 'gray';
        document.getElementById('key15').style.color = 'white';
        event.preventDefault();
    }
    else if (event.keyCode === 81) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key16').style.backgroundColor = 'gray';
        document.getElementById('key16').style.color = 'white';
    }
    else if (event.keyCode === 87) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key17').style.backgroundColor = 'gray';
        document.getElementById('key17').style.color = 'white';
    }
    else if (event.keyCode === 69) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key18').style.backgroundColor = 'gray';
        document.getElementById('key18').style.color = 'white';
    }
    else if (event.keyCode === 82) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key19').style.backgroundColor = 'gray';
        document.getElementById('key19').style.color = 'white';
    }
    else if (event.keyCode === 84) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key20').style.backgroundColor = 'gray';
        document.getElementById('key20').style.color = 'white';
    }
    else if (event.keyCode === 89) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key21').style.backgroundColor = 'gray';
        document.getElementById('key21').style.color = 'white';
    }
    else if (event.keyCode === 85) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key22').style.backgroundColor = 'gray';
        document.getElementById('key22').style.color = 'white';
    }
    else if (event.keyCode === 73) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key23').style.backgroundColor = 'gray';
        document.getElementById('key23').style.color = 'white';
    }
    else if (event.keyCode === 79) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key24').style.backgroundColor = 'gray';
        document.getElementById('key24').style.color = 'white';
    }
    else if (event.keyCode === 80) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key25').style.backgroundColor = 'gray';
        document.getElementById('key25').style.color = 'white';
    }
    else if (event.keyCode === 219) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key26').style.backgroundColor = 'gray';
        document.getElementById('key26').style.color = 'white';
    }
    else if (event.keyCode === 221) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key27').style.backgroundColor = 'gray';
        document.getElementById('key27').style.color = 'white';
    }
    else if (event.keyCode === 220) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key28').style.backgroundColor = 'gray';
        document.getElementById('key28').style.color = 'white';
    }
    else if (event.keyCode === 20) {
        document.getElementById('key29').style.backgroundColor = 'gray';
        document.getElementById('key29').style.color = 'white';
        return event.keyCode != 20;
    }
    else if (event.keyCode === 65) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key30').style.backgroundColor = 'gray';
        document.getElementById('key30').style.color = 'white';
    }
    else if (event.keyCode === 83) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key31').style.backgroundColor = 'gray';
        document.getElementById('key31').style.color = 'white';
    }
    else if (event.keyCode === 68) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key32').style.backgroundColor = 'gray';
        document.getElementById('key32').style.color = 'white';
    }
    else if (event.keyCode === 70) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key33').style.backgroundColor = 'gray';
        document.getElementById('key33').style.color = 'white';
    }
    else if (event.keyCode === 71) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key34').style.backgroundColor = 'gray';
        document.getElementById('key34').style.color = 'white';
    }
    else if (event.keyCode === 72) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key35').style.backgroundColor = 'gray';
        document.getElementById('key35').style.color = 'white';
    }
    else if (event.keyCode === 74) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key36').style.backgroundColor = 'gray';
        document.getElementById('key36').style.color = 'white';
    }
    else if (event.keyCode === 75) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key37').style.backgroundColor = 'gray';
        document.getElementById('key37').style.color = 'white';
    }
    else if (event.keyCode === 76) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key38').style.backgroundColor = 'gray';
        document.getElementById('key38').style.color = 'white';
    }
    else if (event.keyCode === 186) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key39').style.backgroundColor = 'gray';
        document.getElementById('key39').style.color = 'white';
    }
    else if (event.keyCode === 222) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key40').style.backgroundColor = 'gray';
        document.getElementById('key40').style.color = 'white';
    }
    else if (event.keyCode === 13) {
        input.insertAdjacentHTML("beforeend", '\n');
        document.getElementById('key41').style.backgroundColor = 'gray';
        document.getElementById('key41').style.color = 'white';
    }
    else if (event.code === "ShiftLeft") {
        document.getElementById('key42').style.backgroundColor = 'gray';
        document.getElementById('key42').style.color = 'white';
        return key == 'ShiftLeft';
    }
    else if (event.keyCode === 90) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key43').style.backgroundColor = 'gray';
        document.getElementById('key43').style.color = 'white';
    }
    else if (event.keyCode === 88) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key44').style.backgroundColor = 'gray';
        document.getElementById('key44').style.color = 'white';
    }
    else if (event.keyCode === 67) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key45').style.backgroundColor = 'gray';
        document.getElementById('key45').style.color = 'white';
    }
    else if (event.keyCode === 86) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key46').style.backgroundColor = 'gray';
        document.getElementById('key46').style.color = 'white';
    }
    else if (event.keyCode === 66) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key47').style.backgroundColor = 'gray';
        document.getElementById('key47').style.color = 'white';
    }
    else if (event.keyCode === 78) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key48').style.backgroundColor = 'gray';
        document.getElementById('key48').style.color = 'white';
    }
    else if (event.keyCode === 77) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key49').style.backgroundColor = 'gray';
        document.getElementById('key49').style.color = 'white';
    }
    else if (event.keyCode === 188) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key50').style.backgroundColor = 'gray';
        document.getElementById('key50').style.color = 'white';
    }
    else if (event.keyCode === 190) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key51').style.backgroundColor = 'gray';
        document.getElementById('key51').style.color = 'white';
    }
    else if (event.keyCode === 191) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key52').style.backgroundColor = 'gray';
        document.getElementById('key52').style.color = 'white';
    }
    else if (event.code === "ShiftRight") {
        document.getElementById('key53').style.backgroundColor = 'gray';
        document.getElementById('key53').style.color = 'white';
        return key == 'ShiftRight';
    }
    else if (event.keyCode === 32) {
        input.innerHTML += `${oKey}`;
        document.getElementById('key54').style.backgroundColor = 'gray';
        document.getElementById('key54').style.color = 'white';
    }
})


window.addEventListener('keyup', function () {
    if (event.keyCode == 192) {
        document.getElementById('key1').style.backgroundColor = 'white';
        document.getElementById('key1').style.color = 'black';
    }
    else if (event.keyCode === 49) {
        document.getElementById('key2').style.backgroundColor = 'white';
        document.getElementById('key2').style.color = 'black';
    }
    else if (event.keyCode === 50) {
        document.getElementById('key3').style.backgroundColor = 'white';
        document.getElementById('key3').style.color = 'black';
    }
    else if (event.keyCode === 51) {
        document.getElementById('key4').style.backgroundColor = 'white';
        document.getElementById('key4').style.color = 'black';
    }
    else if (event.keyCode === 52) {
        document.getElementById('key5').style.backgroundColor = 'white';
        document.getElementById('key5').style.color = 'black';
    }
    else if (event.keyCode === 53) {
        document.getElementById('key6').style.backgroundColor = 'white';
        document.getElementById('key6').style.color = 'black';
    }
    else if (event.keyCode === 54) {
        document.getElementById('key7').style.backgroundColor = 'white';
        document.getElementById('key7').style.color = 'black';
    }
    else if (event.keyCode === 55) {
        document.getElementById('key8').style.backgroundColor = 'white';
        document.getElementById('key8').style.color = 'black';
    }
    else if (event.keyCode === 56) {
        document.getElementById('key9').style.backgroundColor = 'white';
        document.getElementById('key9').style.color = 'black';
    }
    else if (event.keyCode === 57) {
        document.getElementById('key10').style.backgroundColor = 'white';
        document.getElementById('key10').style.color = 'black';
    }
    else if (event.keyCode === 48) {
        document.getElementById('key11').style.backgroundColor = 'white';
        document.getElementById('key11').style.color = 'black';
    }
    else if (event.keyCode === 189) {
        document.getElementById('key12').style.backgroundColor = 'white';
        document.getElementById('key12').style.color = 'black';
    }
    else if (event.keyCode === 187) {
        document.getElementById('key13').style.backgroundColor = 'white';
        document.getElementById('key13').style.color = 'black';
    }
    else if (event.keyCode === 8) {
        document.getElementById('key14').style.backgroundColor = 'white';
        document.getElementById('key14').style.color = 'black';
    }
    else if (event.keyCode === 9) {
        document.getElementById('key15').style.backgroundColor = 'white';
        document.getElementById('key15').style.color = 'black';
    }
    else if (event.keyCode === 81) {
        document.getElementById('key16').style.backgroundColor = 'white';
        document.getElementById('key16').style.color = 'black';
    }
    else if (event.keyCode === 87) {
        document.getElementById('key17').style.backgroundColor = 'white';
        document.getElementById('key17').style.color = 'black';
    }
    else if (event.keyCode === 69) {
        document.getElementById('key18').style.backgroundColor = 'white';
        document.getElementById('key18').style.color = 'black';
    }
    else if (event.keyCode === 82) {
        document.getElementById('key19').style.backgroundColor = 'white';
        document.getElementById('key19').style.color = 'black';
    }
    else if (event.keyCode === 84) {
        document.getElementById('key20').style.backgroundColor = 'white';
        document.getElementById('key20').style.color = 'black';
    }
    else if (event.keyCode === 89) {
        document.getElementById('key21').style.backgroundColor = 'white';
        document.getElementById('key21').style.color = 'black';
    }
    else if (event.keyCode === 85) {
        document.getElementById('key22').style.backgroundColor = 'white';
        document.getElementById('key22').style.color = 'black';
    }
    else if (event.keyCode === 73) {
        document.getElementById('key23').style.backgroundColor = 'white';
        document.getElementById('key23').style.color = 'black';
    }
    else if (event.keyCode === 79) {
        document.getElementById('key24').style.backgroundColor = 'white';
        document.getElementById('key24').style.color = 'black';
    }
    else if (event.keyCode === 80) {
        document.getElementById('key25').style.backgroundColor = 'white';
        document.getElementById('key25').style.color = 'black';
    }
    else if (event.keyCode === 219) {
        document.getElementById('key26').style.backgroundColor = 'white';
        document.getElementById('key26').style.color = 'black';
    }
    else if (event.keyCode === 221) {
        document.getElementById('key27').style.backgroundColor = 'white';
        document.getElementById('key27').style.color = 'black';
    }
    else if (event.keyCode === 220) {
        document.getElementById('key28').style.backgroundColor = 'white';
        document.getElementById('key28').style.color = 'black';
    }
    else if (event.keyCode === 20) {
        document.getElementById('key29').style.backgroundColor = 'white';
        document.getElementById('key29').style.color = 'black';
    }
    else if (event.keyCode === 65) {
        document.getElementById('key30').style.backgroundColor = 'white';
        document.getElementById('key30').style.color = 'black';
    }
    else if (event.keyCode === 83) {
        document.getElementById('key31').style.backgroundColor = 'white';
        document.getElementById('key31').style.color = 'black';
    }
    else if (event.keyCode === 68) {
        document.getElementById('key32').style.backgroundColor = 'white';
        document.getElementById('key32').style.color = 'black';
    }
    else if (event.keyCode === 70) {
        document.getElementById('key33').style.backgroundColor = 'white';
        document.getElementById('key33').style.color = 'black';
    }
    else if (event.keyCode === 71) {
        document.getElementById('key34').style.backgroundColor = 'white';
        document.getElementById('key34').style.color = 'black';
    }
    else if (event.keyCode === 72) {
        document.getElementById('key35').style.backgroundColor = 'white';
        document.getElementById('key35').style.color = 'black';
    }
    else if (event.keyCode === 74) {
        document.getElementById('key36').style.backgroundColor = 'white';
        document.getElementById('key36').style.color = 'black';
    }
    else if (event.keyCode === 75) {
        document.getElementById('key37').style.backgroundColor = 'white';
        document.getElementById('key37').style.color = 'black';
    }
    else if (event.keyCode === 76) {
        document.getElementById('key38').style.backgroundColor = 'white';
        document.getElementById('key38').style.color = 'black';
    }
    else if (event.keyCode === 186) {
        document.getElementById('key39').style.backgroundColor = 'white';
        document.getElementById('key39').style.color = 'black';
    }
    else if (event.keyCode === 222) {
        document.getElementById('key40').style.backgroundColor = 'white';
        document.getElementById('key40').style.color = 'black';
    }
    else if (event.keyCode === 13) {
        document.getElementById('key41').style.backgroundColor = 'white';
        document.getElementById('key41').style.color = 'black';
    }
    else if (event.code === "ShiftLeft") {
        document.getElementById('key42').style.backgroundColor = 'white';
        document.getElementById('key42').style.color = 'black';
    }
    else if (event.keyCode === 90) {
        document.getElementById('key43').style.backgroundColor = 'white';
        document.getElementById('key43').style.color = 'black';
    }
    else if (event.keyCode === 88) {
        document.getElementById('key44').style.backgroundColor = 'white';
        document.getElementById('key44').style.color = 'black';
    }
    else if (event.keyCode === 67) {
        document.getElementById('key45').style.backgroundColor = 'white';
        document.getElementById('key45').style.color = 'black';
    }
    else if (event.keyCode === 86) {
        document.getElementById('key46').style.backgroundColor = 'white';
        document.getElementById('key46').style.color = 'black';
    }
    else if (event.keyCode === 66) {
        document.getElementById('key47').style.backgroundColor = 'white';
        document.getElementById('key47').style.color = 'black';
    }
    else if (event.keyCode === 78) {
        document.getElementById('key48').style.backgroundColor = 'white';
        document.getElementById('key48').style.color = 'black';
    }
    else if (event.keyCode === 77) {
        document.getElementById('key49').style.backgroundColor = 'white';
        document.getElementById('key49').style.color = 'black';
    }
    else if (event.keyCode === 188) {
        document.getElementById('key50').style.backgroundColor = 'white';
        document.getElementById('key50').style.color = 'black';
    }
    else if (event.keyCode === 190) {
        document.getElementById('key51').style.backgroundColor = 'white';
        document.getElementById('key51').style.color = 'black';
    }
    else if (event.keyCode === 191) {
        document.getElementById('key52').style.backgroundColor = 'white';
        document.getElementById('key52').style.color = 'black';
    }
    else if (event.code === "ShiftRight") {
        document.getElementById('key53').style.backgroundColor = 'white';
        document.getElementById('key53').style.color = 'black';
    }
    else if (event.keyCode === 32) {
        document.getElementById('key54').style.backgroundColor = 'white';
        document.getElementById('key54').style.color = 'black';
    }
})