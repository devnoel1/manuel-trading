@extends('layouts.user')

@section('content')
    <div class="container" id="inv">
        <h1 style="text-align:center">Bitcoin Payment</h1>
        <h4 style="color:crimson;text-align:center">Send your bitcoin deposit to the address below.</h4><br>

        <div class="mb-3" style="text-align:center">
            <img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin:{{ $address? $address->address:'' }}"
                width="300" height="300" class="btn btn-outline-success" title="CLICK TO COPY BITCOIN ADDRESS">
        </div>
    </div>
    <div style="background-color:none;" align="center">
        <font color="white" size="4"><b><strong>
        <input id="myInput" type="text" value="{{ $address? $address->address:'' }}" style="width:82%;height:100%" readonly></strong></b></font>
        <button type="button" class="btn btn-primary" onclick="myFunction()">Click To Copy</button>
</div>
<font color="crimson" size="5">
    <marquee>Ensure to copy address properly to avoid payment error
    </marquee>
</font><br><br>

<h4 class="text-center mb-3"><a href="https://www.bitcoin.com" target="_blank">Click here to buy Bitcoin</a></h4>

<div class="mb-5 d-flex flex-column justify-content-center align-items-center">
    <h6>IF YOUR PAYMENT WAS <span color="#5CB85C"> SUCCESSFUL</font>, PLEASE UPLOAD PROOF OF PAYMENT BELOW...</h4>
        <form action="{{ route('payment.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <input type="hidden" value="{{ request()->id  }}" name="deposit_id"/>
                <input type="file" name="file">
                @error('file')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
</div>
@endsection
@section('scrips')

<script>
    function myFunction() {
      var copyText = document.getElementById("myInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      Swal.fire('', '<b>Bitcoin Wallet Copied : </b> ' + copyText.value + '', '', '');
    }
</script>
@endsection
