package com.example.lmsbai1

import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btn1 = findViewById<Button>(R.id.btn1)
        val btn2 = findViewById<Button>(R.id.btn2)
        val btn3 = findViewById<Button>(R.id.btn3)
        val btn4 = findViewById<Button>(R.id.btn4)
        val btn5 = findViewById<Button>(R.id.btn5)
        val btn6 = findViewById<Button>(R.id.btn6)

        btn1.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 1", Toast.LENGTH_SHORT).show()
        }

        btn2.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 2", Toast.LENGTH_SHORT).show()
        }

        btn3.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 3", Toast.LENGTH_SHORT).show()
        }

        btn4.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 4", Toast.LENGTH_SHORT).show()
        }

        btn5.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 5", Toast.LENGTH_SHORT).show()
        }

        btn6.setOnClickListener {
            Toast.makeText(this, "Bạn đã chọn nút 6", Toast.LENGTH_SHORT).show()
        }
    }
}